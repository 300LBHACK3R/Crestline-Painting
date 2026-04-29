"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactFormSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") return; // prevent double submit

    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      service: String(formData.get("service") || ""),
      details: String(formData.get("details") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("Thanks — your request has been sent successfully.");
      form.reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Unable to send your message.";
      setStatus("error");
      setMessage(errorMessage);
    }
  }

  return (
    <section className="section contact-section">
      <div className="container">

        <div className="form-grid">

          {/* LEFT PANEL */}
          <div className="form-panel form-panel--info">
            <span className="section-intro__eyebrow">
              Contact
            </span>

            <h2 className="section-intro__title">
              Tell us about your project.
            </h2>

            <p className="section-intro__copy">
              Whether you are planning a commercial, multi-family, strata, custom home,
              or interior painting project, Crestline Painting is ready to review the scope
              and provide a clear next step.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-list__item">
                <strong>Email</strong>
                <a href="mailto:info@crestlinepainting.ca">
                  info@crestlinepainting.ca
                </a>
              </div>

              <div className="contact-info-list__item">
                <strong>Phone</strong>
                <a href="tel:+12505551234">
                  (250) 555-1234
                </a>
              </div>

              <div className="contact-info-list__item">
                <strong>Service Area</strong>
                <span>British Columbia, Canada</span>
              </div>
            </div>
          </div>

          {/* FORM PANEL */}
          <form
            className="form-panel form-panel--form"
            onSubmit={handleSubmit}
          >

            <div className="form-grid__two">
              <label className="field">
                <span>Name</span>
                <input type="text" name="name" required />
              </label>

              <label className="field">
                <span>Email</span>
                <input type="email" name="email" required />
              </label>
            </div>

            <div className="form-grid__two">
              <label className="field">
                <span>Phone</span>
                <input type="text" name="phone" />
              </label>

              <label className="field">
                <span>Company</span>
                <input type="text" name="company" />
              </label>
            </div>

            <label className="field">
              <span>Service Type</span>
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Multi-Family">Multi-Family</option>
                <option value="Custom Homes">Custom Homes</option>
                <option value="Commercial Painting">Commercial Painting</option>
                <option value="Strata & Building Maintenance">
                  Strata & Building Maintenance
                </option>
                <option value="Interior Painting">Interior Painting</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </label>

            <label className="field">
              <span>Project Details</span>
              <textarea
                name="details"
                rows={7}
                placeholder="Tell us about the project, location, timeline, and any important details."
                required
              />
            </label>

            <button
              type="submit"
              className="site-header__cta form-submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Request"}
            </button>

            {message && (
              <p
                className={`form-status ${
                  status === "success"
                    ? "form-status--success"
                    : status === "error"
                    ? "form-status--error"
                    : ""
                }`}
              >
                {message}
              </p>
            )}
          </form>

        </div>

      </div>
    </section>
  );
}