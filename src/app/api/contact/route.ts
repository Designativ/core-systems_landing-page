import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, website, message } = body;

    // TODO: Replace with your actual email service or database logic
    // Example: SendGrid, Resend, AWS SES, or save to database
    console.log("Contact form submission:", {
      name,
      email,
      company,
      website,
      message,
      timestamp: new Date().toISOString(),
    });

    // For now, we'll just return success
    // In production, you should:
    // 1. Validate the data server-side
    // 2. Send an email notification
    // 3. Optionally save to a database
    // 4. Send a confirmation email to the user

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
