import { useState } from "react";

function TimelineCard({ projectData, setProjectData }) {
  const [isEditing, setIsEditing] = useState(false);

  const [progress, setProgress] = useState(projectData.progress);
  const [currentPhase, setCurrentPhase] = useState(projectData.currentPhase);

  const phases = [
    "Kickoff",
    "Design",
    "Development",
    "Testing",
    "Launch",
    "Delivery",
  ];

  const currentIndex = phases.indexOf(projectData.currentPhase);

  const handleSave = () => {
    setProjectData((prev) => ({
      ...prev,
      progress: Number(progress),
      currentPhase,
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setProgress(projectData.progress);
    setCurrentPhase(projectData.currentPhase);
    setIsEditing(false);
  };

  return (
    <section className="timeline-card">
      <div className="timeline-card__head">
        <div>
          <h2 className="timeline-card__title">Project Timeline</h2>
          <p className="timeline-card__subtitle">
            Current project phase progression
          </p>
        </div>

        {!isEditing ? (
          <button
            className="timeline-card__edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit Project
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
          <div className="timeline-card__steps">
            {phases.map((phase, index) => {
              let extraClass = "";

              if (index < currentIndex) {
                extraClass = "timeline-card__step--done";
              } else if (index === currentIndex) {
                extraClass = "timeline-card__step--current";
              }

              return (
                <div
                  key={phase}
                  className={`timeline-card__step ${extraClass}`}
                >
                  <div className="timeline-card__circle">
                    {index < currentIndex ? "✓" : index === currentIndex ? "●" : ""}
                  </div>
                  <span>{phase}</span>
                </div>
              );
            })}
          </div>

          <div className="timeline-card__progress">
            <div className="timeline-card__progress-head">
              <span>Overall Progress</span>
              <span>{projectData.progress}%</span>
            </div>

            <div className="timeline-card__progress-bar">
              <div
                className="timeline-card__progress-fill"
                style={{ width: `${projectData.progress}%` }}
              ></div>
            </div>
          </div>
        </>
      ) : (
        <div className="timeline-card__edit-form">
          <div className="timeline-card__field">
            <label className="timeline-card__label">Progress (%)</label>
            <input
              className="timeline-card__input"
              type="number"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            />
          </div>

          <div className="timeline-card__field">
            <label className="timeline-card__label">Current Phase</label>
            <select
              className="timeline-card__input"
              value={currentPhase}
              onChange={(e) => setCurrentPhase(e.target.value)}
            >
              {phases.map((phase) => (
                <option key={phase} value={phase}>
                  {phase}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </section>
  );
}

export default TimelineCard;