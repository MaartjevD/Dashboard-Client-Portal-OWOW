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
    <section className="project-description-card">
      <div className="project-description-card__head">
        <div>
          <h2 className="project-description-card__title">
            Project Description
          </h2>
          <p className="project-description-card__subtitle">Description</p>
        </div>

        {!isEditing ? (
          <button
            className="project-description-card__edit-btn"
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
        <>
          <div className="project-description-card__box">
            {projectData.description}
          </div>

          <div className="project-description-card__dates">
            <div>
              <label className="project-description-card__label">
                Start Date
              </label>
              <div className="project-description-card__input-like">
                {projectData.startDate}
              </div>
            </div>

            <div>
              <label className="project-description-card__label">
                Target end Date
              </label>
              <div className="project-description-card__input-like">
                {projectData.targetEndDate}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <textarea
            className="project-description-card__textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="project-description-card__dates">
            <div>
              <label className="project-description-card__label">
                Start Date
              </label>
              <input
                className="project-description-card__real-input"
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div>
              <label className="project-description-card__label">
                Target end Date
              </label>
              <input
                className="project-description-card__real-input"
                type="text"
                value={targetEndDate}
                onChange={(e) => setTargetEndDate(e.target.value)}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default ProjectDescriptionCard;