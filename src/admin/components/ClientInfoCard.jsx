import { useState } from "react";

function ClientInfoCard({ projectData, setProjectData }) {
  const [isEditing, setIsEditing] = useState(false);

  const [company, setCompany] = useState(projectData.company);
  const [contactPerson, setContactPerson] = useState(projectData.contactPerson);
  const [phone, setPhone] = useState(projectData.phone);
  const [email, setEmail] = useState(projectData.email);
  const [location, setLocation] = useState(projectData.location);

  const handleSave = () => {
    setProjectData((prev) => ({
      ...prev,
      company,
      contactPerson,
      phone,
      email,
      location,
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setCompany(projectData.company);
    setContactPerson(projectData.contactPerson);
    setPhone(projectData.phone);
    setEmail(projectData.email);
    setLocation(projectData.location);
    setIsEditing(false);
  };

  return (
    <section className="client-info-card">
      <div className="client-info-card__head">
        <h2 className="client-info-card__title">Client Information</h2>

        {!isEditing ? (
          <button
            className="client-info-card__edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        ) : (
          <div className="inline-edit-actions">
            <button
              className="inline-edit-actions__cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="inline-edit-actions__save"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        )}
      </div>

      {!isEditing ? (
        <div className="client-info-card__list">
          <div className="client-info-card__item">
            <span className="client-info-card__label">Company Name</span>
            <span className="client-info-card__value">{projectData.company}</span>
          </div>

          <div className="client-info-card__item">
            <span className="client-info-card__label">Contact Person</span>
            <span className="client-info-card__value">
              {projectData.contactPerson}
            </span>
          </div>

          <div className="client-info-card__item">
            <span className="client-info-card__value">{projectData.phone}</span>
          </div>

          <div className="client-info-card__item">
            <span className="client-info-card__value">{projectData.email}</span>
          </div>

          <div className="client-info-card__item">
            <span className="client-info-card__value">{projectData.location}</span>
          </div>
        </div>
      ) : (
        <div className="client-info-card__form">
          <input
            className="client-info-card__input"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company Name"
          />

          <input
            className="client-info-card__input"
            type="text"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
            placeholder="Contact Person"
          />

          <input
            className="client-info-card__input"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />

          <input
            className="client-info-card__input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            className="client-info-card__input"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </div>
      )}
    </section>
  );
}

export default ClientInfoCard;