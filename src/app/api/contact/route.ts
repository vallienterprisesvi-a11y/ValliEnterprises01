import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Get the Google Apps Script Web App URL from environment variables
    const scriptUrl = process.env.GOOGLE_SHEET_SCRIPT_URL;
    
    if (!scriptUrl) {
      console.error("GOOGLE_SHEET_SCRIPT_URL environment variable is missing.");
      return NextResponse.json(
        { 
          success: false, 
          message: "Form configuration missing. Please set GOOGLE_SHEET_SCRIPT_URL in your environment." 
        },
        { status: 500 }
      );
    }
    
    // Post the data to the Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: body.name,
        phone: body.phone,
        location: body.location,
        waterSource: body.waterSource,
        message: body.message,
      }),
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script API responded with status ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to submit contact request." },
      { status: 500 }
    );
  }
}
