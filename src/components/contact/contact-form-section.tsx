"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  details: string;
};

const serviceOptions = [
  "Multi-Family",
  "Custom Homes",
  "Commercial Painting",
  "Strata & Building Maintenance",
  "Interior Painting",
  "General Inquiry",
];

function getFormValue(formData: FormData, key: keyof ContactPayload) {
  return String(formData.get(key) ?? "").trim();
}

export default function ContactFormSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const isLoading = status === "loading";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload: ContactPayload = {
      name: getFormValue(formData, "name"),
      email: getFormValue(formData, "email"),
      phone: getFormValue(formData, "phone"),
      company: getFormValue(formData, "company"),
      service: getFormValue(formData, "service"),
      details: getFormValue(formData, "details"),
    };

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to send your request right now."
        );
      }

      setStatus("success");
      setMessage("Thanks — your request has been sent successfully.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your request right now."
      );
    }
  }

  return (
    <section
      className="section contact-section"
      aria-labelledby="contact-form-heading"
    >
      <div className="container">
        <div className="form-grid">
          <aside className="form-panel form-panel--info">
            <span className="section-intro__eyebrow">Contact</span>

            <h2 id="contact-form-heading" className="section-intro__title">
              Tell us about your project.
            </h2>

            <p className="section-intro__copy">
              Whether you are planning a commercial, multi-family, strata,
              custom home, or interior painting project, Crestline Painting is
              ready to review the scope and provide a clear next step.
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
                <a href="tel:+16042430328">(604) 243-0328</a>
              </div>

              <div className="contact-info-list__item">
                <strong>Service Area</strong>
                <span>British Columbia, Canada</span>
              </div>
            </div>
          </aside>

          <form
            className="form-panel form-panel--form"
            onSubmit={handleSubmit}
            noValidate={false}
          >
            <div className="form-grid__two">
              <label className="field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <div className="form-grid__two">
              <label className="field">
                <span>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                />
              </label>

              <label className="field">
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                />
              </label>
            </div>

            <label className="field">
              <span>Service Type</span>
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>

                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
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
              className="button button--primary form-submit"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? "Sending..." : "Send Request"}
            </button>

            {message ? (
              <p
                className={`form-status ${
                  status === "success"
                    ? "form-status--success"
                    : status === "error"
                      ? "form-status--error"
                      : ""
                }`}
                role={status === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}