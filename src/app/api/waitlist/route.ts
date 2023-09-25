import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body: { firstname: string; lastname: string; email: string } =
    await req.json();

  try {
    const response = await fetch(
      process.env.AI_DESIGN_WAITLIST_WEBHOOK_URL ||
        "https://hooks.zapier.com/hooks/catch/3478449/3id5hrc/",
      {
        method: "POST",
        body: JSON.stringify(body),
      },
    );
    return NextResponse.json({ message: "ok" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "failed" }, { status: 500 });
  }
}
