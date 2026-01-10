module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Documents/Core-Design/Website 2.0/src/app/api/contact/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
;
;
// Lazy initialization to avoid errors at module load time
function getResendClient() {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return null;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](apiKey);
    } catch (error) {
        console.error("Failed to initialize Resend client:", error);
        return null;
    }
}
async function POST(request) {
    // Ensure we always return JSON with proper headers
    const jsonHeaders = {
        "Content-Type": "application/json"
    };
    try {
        // Parse request body with error handling
        let body;
        try {
            body = await request.json();
        } catch (parseError) {
            console.error("Error parsing request body:", parseError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid request format. Please ensure all fields are properly filled."
            }, {
                status: 400,
                headers: jsonHeaders
            });
        }
        const { name, email, company, website, message, recaptchaToken } = body;
        // Validate required fields
        if (!name || !email || !message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Name, email, and message are required"
            }, {
                status: 400,
                headers: jsonHeaders
            });
        }
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid email address"
            }, {
                status: 400,
                headers: jsonHeaders
            });
        }
        // Verify reCAPTCHA token (if configured)
        // Skip reCAPTCHA verification in development/localhost if not configured
        const isDevelopment = ("TURBOPACK compile-time value", "development") === "development" || request.headers.get("host")?.includes("localhost");
        if (process.env.RECAPTCHA_SECRET_KEY) {
            if (!recaptchaToken) {
                // In development, allow submission without reCAPTCHA if it's not working
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("reCAPTCHA token missing in development - allowing submission without verification");
                } else //TURBOPACK unreachable
                ;
            } else {
                try {
                    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
                    });
                    const recaptchaData = await recaptchaResponse.json();
                    if (!recaptchaData.success) {
                        console.error("reCAPTCHA verification failed:", recaptchaData);
                        // In development, allow submission even if reCAPTCHA fails (for testing)
                        if ("TURBOPACK compile-time truthy", 1) {
                            console.warn("reCAPTCHA verification failed in development - allowing submission for testing");
                        } else //TURBOPACK unreachable
                        ;
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
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.warn("reCAPTCHA verification error in development - allowing submission for testing");
                    } else //TURBOPACK unreachable
                    ;
                }
            }
        } else {
            // If reCAPTCHA is not configured, log a warning but allow the submission
            if ("TURBOPACK compile-time truthy", 1) {
                console.log("reCAPTCHA is not configured - form will work without spam protection");
            } else //TURBOPACK unreachable
            ;
        }
        // Check if RESEND_API_KEY is configured and initialize client
        const resend = getResendClient();
        if (!resend) {
            console.error("RESEND_API_KEY is not configured. Please add it to .env.local");
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Email service is not configured. Please set RESEND_API_KEY in .env.local"
            }, {
                status: 500,
                headers: jsonHeaders
            });
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
            text: emailText
        });
        if (error) {
            console.error("Resend API error:", error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Failed to send email: ${error.message || JSON.stringify(error)}`
            }, {
                status: 500,
                headers: jsonHeaders
            });
        }
        console.log("Email sent successfully:", data);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Form submitted successfully",
            id: data?.id
        }, {
            status: 200,
            headers: jsonHeaders
        });
    } catch (error) {
        // Catch any unhandled errors and ensure we always return JSON
        console.error("Error processing contact form:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        // Safely extract error details
        let errorDetails = "Failed to process form submission";
        if (error instanceof Error) {
            errorDetails = error.message || errorDetails;
        }
        // Ensure we always return JSON, never HTML
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: errorDetails
            }, {
                status: 500,
                headers: jsonHeaders
            });
        } catch (jsonError) {
            // Last resort - return a basic JSON error if even JSON creation fails
            console.error("Critical: Failed to create JSON response:", jsonError);
            return new Response(JSON.stringify({
                error: "Internal server error"
            }), {
                status: 500,
                headers: jsonHeaders
            });
        }
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__72ff9e88._.js.map