export default function ContactFormSection() {
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
                  <option>Interior Painting</option>
                </select>
              </label>
            </div>

            <div className="form-grid__two">
              <label className="field">
                <span>Project Location</span>
                <input type="text" placeholder="City / job site location" />
              </label>

              <label className="field">
                <span>Timeline</span>
                <input type="text" placeholder="Start date or timeframe" />
              </label>
            </div>

            <label className="field">
              <span>Project Details</span>
              <textarea placeholder="Describe the scope of work, building type, size, surfaces, and any important details." />
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