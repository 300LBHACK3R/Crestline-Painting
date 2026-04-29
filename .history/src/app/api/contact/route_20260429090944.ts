import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  service?: unknown;
  details?: unknown;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FIELD_LENGTH = 160;
const MAX_DETAILS_LENGTH = 3000;

function normalize(input: unknown, maxLength = MAX_FIELD_LENGTH) {
  return String(input ?? "")
    .replace(/\0/g, "")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatValue(value: string) {
  return escapeHtml(value || "Not provided");
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid request format." },
        { status: 415 }
      );
    }

    const body = (await request.json()) as ContactPayload;

    const name = normalize(body.name);
    const email = normalize(body.email).toLowerCase();
    const phone = normalize(body.phone);
    const company = normalize(body.company);
    const service = normalize(body.service);
    const details = normalize(body.details, MAX_DETAILS_LENGTH);

    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !to || !from) {
      console.error("CONTACT_FORM_CONFIG_ERROR", {
        hasResendApiKey: Boolean(resendApiKey),
        hasTo: Boolean(to),
        hasFrom: Boolean(from),
      });

      return NextResponse.json(
        { error: "Missing contact email configuration." },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeDetails = escapeHtml(details).replace(/\n/g, "<br />");

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Crestline Inquiry — ${name}`,
      text: [
        "New Crestline Painting Inquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Company: ${company || "Not provided"}`,
        `Service: ${service || "Not provided"}`,
        "",
        "Project Details:",
        details,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #071a33; max-width: 720px;">
          <h2 style="margin: 0 0 20px; color: #071a33;">
            New Crestline Painting Inquiry
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 140px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;">
                <a href="mailto:${safeEmail}" style="color: #0a4f93;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0;">${formatValue(phone)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Company:</strong></td>
              <td style="padding: 8px 0;">${formatValue(company)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Service:</strong></td>
              <td style="padding: 8px 0;">${formatValue(service)}</td>
            </tr>
          </table>

          <div style="margin-top: 22px; padding-top: 18px; border-top: 1px solid #dbeafe;">
            <strong>Project Details:</strong>
            <p style="margin-top: 8px;">${safeDetails}</p>
          </div>
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