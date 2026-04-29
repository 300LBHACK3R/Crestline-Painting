import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function sanitize(input: string) {
  return input.replace(/[<>]/g, "").trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    let {
      name = "",
      email = "",
      phone = "",
      company = "",
      service = "",
      details = "",
    } = body ?? {};

    // 🔥 sanitize inputs
    name = sanitize(name);
    email = sanitize(email);
    phone = sanitize(phone);
    company = sanitize(company);
    service = sanitize(service);
    details = sanitize(details);

    // 🔥 validation
    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
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
      subject: `New Crestline Inquiry — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          
          <h2 style="margin-bottom: 20px;">New Crestline Painting Inquiry</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0;"><strong>Name:</strong></td>
              <td>${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0;"><strong>Email:</strong></td>
              <td>${email}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0;"><strong>Phone:</strong></td>
              <td>${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0;"><strong>Company:</strong></td>
              <td>${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0;"><strong>Service:</strong></td>
              <td>${service || "Not provided"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <strong>Project Details:</strong>
            <p style="margin-top: 8px;">
              ${details.replace(/\n/g, "<br />")}
            </p>
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