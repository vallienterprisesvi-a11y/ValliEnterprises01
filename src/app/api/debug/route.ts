import { NextResponse } from "next/server";

export async function GET() {
  const scriptUrl = process.env.GOOGLE_SHEET_SCRIPT_URL;
  return NextResponse.json({
    hasUrl: !!scriptUrl,
    urlLength: scriptUrl ? scriptUrl.length : 0,
    nodeEnv: process.env.NODE_ENV,
  });
}
