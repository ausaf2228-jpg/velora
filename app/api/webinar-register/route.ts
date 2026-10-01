import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_WEBHOOK_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbxRgPN6YXcnn5ZlylLgBHt4LXyx-BDvAkMP6u3L8yIXCAs0kx6-KazHhSWw_eURWj0cwQ/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
      redirect: "follow",
      cache: "no-store",
    });

    const result = await response.text();
    console.log("Google Apps Script response:", result);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Submission routing error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}