import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name = "",
      email = "",
      phone = "",
      company = "",
      service = "",
      details = "",
    } = body ?? {};

    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json(
        { error: "Missing contact email configuration." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Crestline Painting inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>New Crestline Painting Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Service:</strong> ${service || "Not provided"}</p>
          <p><strong>Project Details:</strong></p>
          <p>${String(details).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT_FORM_ERROR", error);
    return NextResponse.json(
      { error: "Unable to send your request right now." },
      { status: 500 }
    );
  }
}