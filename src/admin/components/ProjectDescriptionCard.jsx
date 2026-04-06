import { useState } from "react";

function ProjectDescriptionCard({ projectData, setProjectData }) {
  const [isEditing, setIsEditing] = useState(false);

  const [description, setDescription] = useState(projectData.description);
  const [startDate, setStartDate] = useState(projectData.startDate);
  const [targetEndDate, setTargetEndDate] = useState(projectData.targetEndDate);

  const handleSave = () => {
    setProjectData((prev) => ({
      ...prev,
      description,
      startDate,
      targetEndDate,
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDescription(projectData.description);
    setStartDate(projectData.startDate);
    setTargetEndDate(projectData.targetEndDate);
    setIsEditing(false);
  };

  return (
    <section className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div>
            <h2 className="h5 fw-semibold mb-1">Project Description</h2>
            <p className="text-muted small mb-0">Description</p>
          </div>

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
          <>
            <div className="project-description-box">
              {projectData.description}
            </div>

            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label text-muted small fw-semibold">
                  Start Date
                </label>
                <div className="project-date-box">
                  {projectData.startDate}
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label text-muted small fw-semibold">
                  Target End Date
                </label>
                <div className="project-date-box">
                  {projectData.targetEndDate}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <textarea
                className="form-control"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label text-muted small fw-semibold">
                  Start Date
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label text-muted small fw-semibold">
                  Target End Date
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={targetEndDate}
                  onChange={(e) => setTargetEndDate(e.target.value)}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ProjectDescriptionCard;