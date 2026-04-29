export default function ContactFormSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="form-panel">
          <div className="section-intro">
            <div className="section-intro__eyebrow">Inquiry Form</div>
            <h2 className="section-intro__title">Simple, clear, and ready for real project inquiries.</h2>
            <p className="section-intro__copy">
              Share the key project details below so the first response can be more accurate and
              more useful.
            </p>
          </div>

          <form className="form-grid">
            <div className="form-grid__two">
              <label className="field">
                <span>Full Name</span>
                <input type="text" placeholder="Your full name" />
              </label>
              <label className="field">
                <span>Email Address</span>
                <input type="email" placeholder="you@example.com" />
              </label>
            </div>

            <div className="form-grid__two">
              <label className="field">
                <span>Phone Number</span>
                <input type="tel" placeholder="Your phone number" />
              </label>
              <label className="field">
                <span>Project Type</span>
                <select defaultValue="">
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option>Commercial Painting</option>
                  <option>Multi-Family</option>
                  <option>Strata & Building Maintenance</option>
                  <option>Custom Homes</option>
                </select>
              </label>
            </div>

            <div className="form-grid__two">
              <label className="field">
                <span>Location</span>
                <input type="text" placeholder="Project location" />
              </label>
              <label className="field">
                <span>Timeline</span>
                <input type="text" placeholder="Desired timeline" />
              </label>
            </div>

            <label className="field">
              <span>Project Details</span>
              <textarea placeholder="Tell us about the project, scope, service needs, and any important details." />
            </label>

            <div className="form-grid__actions">
              <button type="submit" className="button-primary">
                Send Inquiry
              </button>
              <button type="button" className="button-secondary">
                Attach Photos Later
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}