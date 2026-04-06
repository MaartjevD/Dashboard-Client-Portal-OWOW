function ContactCard({ contact }) {
  const email = contact?.email || "—";
  const phone = contact?.phone || "—";
  const linkedIn = contact?.social || "—";
  const backgroundImage = contact?.backgroundImage || "";

  const hasEmail = email !== "—";
  const hasPhone = phone !== "—";
  const hasLinkedIn = linkedIn !== "—";

  const normalizedLinkedIn =
    hasLinkedIn && linkedIn.startsWith("http")
      ? linkedIn
      : hasLinkedIn
      ? `https://${linkedIn}`
      : "#";

  return (
    <div className="contact-card contact-card-premium overflow-hidden position-relative">
      <div
        className="contact-card-bg-image"
        style={
          backgroundImage
            ? { backgroundImage: `url("${backgroundImage}")` }
            : undefined
        }
      ></div>
      <div className="contact-card-bg-overlay"></div>
      <div className="contact-card-bg-fade"></div>

      <div className="contact-card-content position-relative">
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-5">
            <div className="contact-hero-side h-100 d-flex flex-column justify-content-between">
              <div>
                <span className="contact-eyebrow">Primary Contact</span>
                <h3 className="contact-title mb-0">Contact Details</h3>
              </div>

              <div className="contact-person-block">
                <div className="contact-avatar-ring">
                  <div className="contact-avatar-placeholder">
                    <i className="bi bi-person-fill"></i>
                  </div>
                </div>

                <div className="contact-person-text">
                  <h4 className="contact-person-name">{contact?.name || "—"}</h4>
                  <p className="contact-person-role mb-0">{contact?.role || "—"}</p>
                </div>
              </div>

              <p className="contact-description mb-0">
                Use any of the details below to stay in touch and reach the project
                contact directly.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="contact-details-panel h-100">
              <div className="contact-details-header">
                <h5 className="contact-details-title mb-0">Communication Channels</h5>
                <span className="contact-details-badge">Available</span>
              </div>

              <div className="contact-list">
                <div className="contact-item-card">
                  <div className="contact-item-icon">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <div className="contact-item-body">
                    <span className="contact-item-label">Email Address</span>

                    {hasEmail ? (
                      <a
                        href={`mailto:${email}`}
                        className="contact-item-link"
                        target="_self"
                        rel="noreferrer"
                      >
                        {email}
                      </a>
                    ) : (
                      <span className="contact-item-text">—</span>
                    )}
                  </div>

                  {hasEmail && (
                    <a
                      href={`mailto:${email}`}
                      className="contact-item-action"
                      aria-label="Send email"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  )}
                </div>

                <div className="contact-item-card">
                  <div className="contact-item-icon">
                    <i className="bi bi-telephone"></i>
                  </div>

                  <div className="contact-item-body">
                    <span className="contact-item-label">Phone Number</span>

                    {hasPhone ? (
                      <a href={`tel:${phone}`} className="contact-item-link">
                        {phone}
                      </a>
                    ) : (
                      <span className="contact-item-text">—</span>
                    )}
                  </div>

                  {hasPhone && (
                    <a
                      href={`tel:${phone}`}
                      className="contact-item-action"
                      aria-label="Call phone number"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  )}
                </div>

                <div className="contact-item-card">
                  <div className="contact-item-icon linkedin">
                    <i className="bi bi-linkedin"></i>
                  </div>

                  <div className="contact-item-body">
                    <span className="contact-item-label">LinkedIn Profile</span>

                    {hasLinkedIn ? (
                      <a
                        href={normalizedLinkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-item-link"
                      >
                        {linkedIn}
                      </a>
                    ) : (
                      <span className="contact-item-text">—</span>
                    )}
                  </div>

                  {hasLinkedIn && (
                    <a
                      href={normalizedLinkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-item-action"
                      aria-label="Open LinkedIn profile"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;