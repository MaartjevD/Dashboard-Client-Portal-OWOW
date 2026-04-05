function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <h3 className="contact-title">Contact gegevens</h3>

      <div className="contact-person-name">{contact.name}</div>
      <div className="contact-person-role">{contact.role}</div>

      <p className="contact-description">We can keep in touch on these ways</p>

      <div className="contact-list">
        <div className="contact-item">
          <i className="bi bi-envelope"></i>
          <span>{contact.email}</span>
        </div>

        <div className="contact-item">
          <i className="bi bi-telephone"></i>
          <span>{contact.phone}</span>
        </div>

        <div className="contact-item">
          <i className="bi bi-clock-history"></i>
          <span>{contact.social}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;