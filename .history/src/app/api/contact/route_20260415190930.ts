import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      projectType,
      location,
      timeline,
      projectDetails,
    } = body;

    if (!fullName || !email || !projectType || !location || !projectDetails) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { error: "Server email configuration is incomplete." },
        { status: 500 }
      );
    }

    const subject = `New Crestline Inquiry — ${projectType}`;

    const html = `
      <h2>New Website Inquiry</h2>
      <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email Address:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone Number:</strong> ${escapeHtml(phone || "Not provided")}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
      <p><strong>Project Location:</strong> ${escapeHtml(location)}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(timeline || "Not provided")}</p>
      <p><strong>Project Details:</strong></p>
      <p>${escapeHtml(projectDetails).replace(/\n/g, "<br />")}</p>
    `;

    const text = `New Website Inquiry

Full Name: ${fullName}
Email Address: ${email}
Phone Number: ${phone || "Not provided"}
Project Type: ${projectType}
Project Location: ${location}
Timeline: ${timeline || "Not provided"}

Project Details:
${projectDetails}
`;

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong while sending the inquiry." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}