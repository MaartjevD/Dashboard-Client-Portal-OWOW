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
    <section className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
          <div>
            <h2 className="h5 fw-semibold mb-1">Project Timeline</h2>
            <p className="text-muted small mb-0">
              Current project phase progression
            </p>
          </div>

          {!isEditing ? (
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => setIsEditing(true)}
            >
              Edit Project
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
            <div className="row g-3 mb-4">
              {phases.map((phase, index) => {
                const isDone = index < currentIndex;
                const isCurrent = index === currentIndex;

                return (
                  <div key={phase} className="col-6 col-md-4 col-xl-2">
                    <div className="d-flex flex-column align-items-center text-center h-100">
                      <div
                        className={`rounded-circle d-flex align-items-center justify-content-center fw-semibold mb-2 ${
                          isDone
                            ? "bg-success text-white"
                            : isCurrent
                            ? "bg-primary text-white"
                            : "bg-light text-muted border"
                        }`}
                        style={{ width: "42px", height: "42px" }}
                      >
                        {isDone ? "✓" : isCurrent ? "●" : ""}
                      </div>

                      <span
                        className={`small fw-medium ${
                          isDone || isCurrent ? "text-dark" : "text-muted"
                        }`}
                      >
                        {phase}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <div className="d-flex justify-content-between small text-muted mb-2">
                <span>Overall Progress</span>
                <span>{projectData.progress}%</span>
              </div>

              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${projectData.progress}%` }}
                  aria-valuenow={projectData.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </>
        ) : (
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label text-muted small fw-semibold">
                Progress (%)
              </label>
              <input
                className="form-control"
                type="number"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label text-muted small fw-semibold">
                Current Phase
              </label>
              <select
                className="form-select"
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
      </div>
    </section>
  );
}

export default TimelineCard;