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
    <section className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h5 fw-semibold mb-0">Client Information</h2>

          {!isEditing ? (
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          ) : (
            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          )}
        </div>

        {!isEditing ? (
          <div className="d-flex flex-column gap-3">
            <div>
              <div className="text-muted small text-uppercase fw-semibold mb-1">
                Company Name
              </div>
              <div className="fw-medium">{projectData.company}</div>
            </div>

            <div>
              <div className="text-muted small text-uppercase fw-semibold mb-1">
                Contact Person
              </div>
              <div className="fw-medium">{projectData.contactPerson}</div>
            </div>

            <div>
              <div className="text-muted small text-uppercase fw-semibold mb-1">
                Phone
              </div>
              <div className="fw-medium">{projectData.phone}</div>
            </div>

            <div>
              <div className="text-muted small text-uppercase fw-semibold mb-1">
                Email
              </div>
              <div className="fw-medium">{projectData.email}</div>
            </div>

            <div>
              <div className="text-muted small text-uppercase fw-semibold mb-1">
                Location
              </div>
              <div className="fw-medium">{projectData.location}</div>
            </div>
          </div>
        ) : (
          <div className="row g-3">
            <div className="col-12">
              <input
                className="form-control"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company Name"
              />
            </div>

            <div className="col-12">
              <input
                className="form-control"
                type="text"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                placeholder="Contact Person"
              />
            </div>

            <div className="col-12">
              <input
                className="form-control"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
              />
            </div>

            <div className="col-12">
              <input
                className="form-control"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>

            <div className="col-12">
              <input
                className="form-control"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ClientInfoCard;