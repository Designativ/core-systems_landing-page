import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, website, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token (if configured)
    // Skip reCAPTCHA verification in development/localhost if not configured
    const isDevelopment = process.env.NODE_ENV === "development" || 
                         request.headers.get("host")?.includes("localhost");
    
    if (process.env.RECAPTCHA_SECRET_KEY) {
      if (!recaptchaToken) {
        // In development, allow submission without reCAPTCHA if it's not working
        if (isDevelopment) {
          console.warn("reCAPTCHA token missing in development - allowing submission without verification");
        } else {
          return NextResponse.json(
            { error: "reCAPTCHA verification failed. Please refresh the page and try again." },
            { status: 400 }
          );
        }
      } else {
        try {
          const recaptchaResponse = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
            }
          );

          const recaptchaData = await recaptchaResponse.json();

          if (!recaptchaData.success) {
            console.error("reCAPTCHA verification failed:", recaptchaData);
            
            // In development, allow submission even if reCAPTCHA fails (for testing)
            if (isDevelopment) {
              console.warn("reCAPTCHA verification failed in development - allowing submission for testing");
            } else {
              // Check for specific error codes
              const errorCodes = recaptchaData["error-codes"] || [];
              let errorMessage = "reCAPTCHA verification failed. Please try again.";
              
              if (errorCodes.includes("invalid-input-secret") || errorCodes.includes("missing-input-secret")) {
                errorMessage = "reCAPTCHA configuration error. Please contact support.";
              } else if (errorCodes.includes("timeout-or-duplicate")) {
                errorMessage = "reCAPTCHA token expired. Please refresh and try again.";
              }
              
              return NextResponse.json(
                { error: errorMessage },
                { status: 400 }
              );
            }
          } else {
            // Optional: Check score (reCAPTCHA v3 returns a score from 0.0 to 1.0)
            // Lower scores indicate a bot, higher scores indicate a human
            if (recaptchaData.score && recaptchaData.score < 0.5) {
              console.warn("reCAPTCHA score is low:", recaptchaData.score);
              // In development, allow low scores for testing
              if (!isDevelopment) {
                // In production, you might want to flag or reject low scores
                // For now, we'll allow but log it
              }
            }
          }
        } catch (recaptchaError) {
          console.error("Error verifying reCAPTCHA:", recaptchaError);
          // In development, allow submission even if reCAPTCHA verification fails
          if (isDevelopment) {
            console.warn("reCAPTCHA verification error in development - allowing submission for testing");
          } else {
            return NextResponse.json(
              { error: "reCAPTCHA verification error. Please try again." },
              { status: 500 }
            );
          }
        }
      }
    } else {
      // If reCAPTCHA is not configured, log a warning but allow the submission
      if (isDevelopment) {
        console.log("reCAPTCHA is not configured - form will work without spam protection");
      } else {
        console.warn("RECAPTCHA_SECRET_KEY is not configured. reCAPTCHA verification is disabled.");
      }
    }

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured. Please add it to .env.local");
      return NextResponse.json(
        { error: "Email service is not configured. Please set RESEND_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    // Prepare email content
    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${website ? `<p><strong>Website:</strong> <a href="${website}" target="_blank" style="color: #2563eb;">${website}</a></p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 14px;">
            This email was sent from the contact form on your website.<br>
            Timestamp: ${new Date().toLocaleString()}
          </p>
        </body>
      </html>
    `;

    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${website ? `Website: ${website}` : ''}

Message:
${message}

---
This email was sent from the contact form on your website.
Timestamp: ${new Date().toLocaleString()}
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: "natalieindesign@gmail.com",
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: `Failed to send email: ${error.message || JSON.stringify(error)}` },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      { message: "Form submitted successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to process form submission: ${errorMessage}` },
      { status: 500 }
    );
  }
}
