import { NextResponse } from "next/server";

/**
 * Example API Route
 * GET /api/example
 *
 * This demonstrates a basic Next.js API route pattern.
 * You can extend this to handle POST, PUT, DELETE, etc.
 */
export async function GET() {
  try {
    // Simulate some async operation
    const data = {
      message: "Hello from the API!",
      timestamp: new Date().toISOString(),
      status: "success",
    };

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // Error handling
    console.error("API Error:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        status: "error",
      },
      { status: 500 }
    );
  }
}
