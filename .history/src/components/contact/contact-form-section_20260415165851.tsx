"use client";

import { useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  timeline: string;
  projectDetails: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  projectType: "",
  location: "",
  timeline: "",
  projectDetails: "",
};

export default function ContactFormSection() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send inquiry.");
      }

      setStatus({
        type: "success",
        message: "Your inquiry has been sent successfully.",
      });

      setFormData(initialState);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your inquiry.";

      setStatus({
        type: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="form-panel">
          <div className="section-intro">
            <div className="section-intro__eyebrow">Inquiry Form</div>

            <h2 className="section-intro__title">
              Provide your project details for a clear and accurate first response.
            </h2>

            <p className="section-intro__copy">
              Include as much detail as possible such as project type, location, scope, and
              timeline. This allows Crestline Painting to review your request properly and respond
              with useful next steps.
            </p>
          </div>

          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-grid__two">
              <label className="field">
                <span>Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="field">
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-grid__two">
              <label className="field">
                <span>Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>

              <label className="field">
                <span>Project Type</span>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="Commercial Painting">Commercial Painting</option>
                  <option value="Multi-Family">Multi-Family</option>
                  <option value="Strata & Building Maintenance">
                    Strata & Building Maintenance
                  </option>
                  <option value="Custom Homes">Custom Homes</option>
                  <option value="Interior Painting">Interior Painting</option>
                </select>
              </label>
            </div>

            <div className="form-grid__two">
              <label className="field">
                <span>Project Location</span>
                <input
                  type="text"
                  name="location"
                  placeholder="City / job site location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="field">
                <span>Timeline</span>
                <input
                  type="text"
                  name="timeline"
                  placeholder="Start date or timeframe"
                  value={formData.timeline}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label className="field">
              <span>Project Details</span>
              <textarea
                name="projectDetails"
                placeholder="Describe the scope of work, building type, size, surfaces, and any important details."
                value={formData.projectDetails}
                onChange={handleChange}
                required
              />
            </label>

            <div className="form-grid__actions">
              <button type="submit" className="button-primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>

              <button type="button" className="button-secondary">
                Attach Photos Later
              </button>
            </div>

            {status.type !== "idle" && (
              <p
                className="section-intro__copy"
                style={{
                  color: status.type === "success" ? "#166534" : "#b91c1c",
                  marginTop: 8,
                }}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}