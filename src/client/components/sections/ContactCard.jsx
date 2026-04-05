function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <h3 className="contact-title">Contact Details</h3>

      <div className="contact-person-name">{contact?.name || "—"}</div>
      <div className="contact-person-role">{contact?.role || "—"}</div>

      <p className="contact-description">Use any of the details below to stay in touch.</p>

      <div className="contact-list">
        <div className="contact-item">
          <i className="bi bi-envelope"></i>
          <span>{contact?.email || "—"}</span>
        </div>

        <div className="contact-item">
          <i className="bi bi-telephone"></i>
          <span>{contact?.phone || "—"}</span>
        </div>

        <div className="contact-item">
          <i className="bi bi-linkedin"></i>
          <span>{contact?.social || "—"}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
