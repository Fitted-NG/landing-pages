import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const response = await fetch(
      "https://hooks.zapier.com/hooks/catch/3478449/3fddqtj/",
      {
        method: "POST",
        body: JSON.stringify(await req.json()),
      }
    );
    return NextResponse.json({ message: "ok" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "failed" }, { status: 400 });
  }
}
