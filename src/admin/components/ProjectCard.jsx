import { useNavigate } from "react-router-dom";

function ProjectCard({
  title,
  status,
  progress,
  startDate,
  endDate,
  updated,
  team,
  clickable = false,
}) {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    if (clickable) {
      navigate("/project-dashboard");
    }
  };

  const statusClass =
    status === "Active"
      ? "bg-success-subtle text-success"
      : "bg-primary-subtle text-primary";

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4 d-flex flex-column">

        {/* Top */}
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5
              className={`fw-semibold mb-2 ${
                clickable ? "text-white" : ""
              }`}
              style={{ cursor: clickable ? "pointer" : "default" }}
              onClick={handleProjectClick}
            >
              {title}
            </h5>

            <span className={`badge ${statusClass}`}>
              {status}
            </span>
          </div>

          <button className="btn btn-light btn-sm">⋮</button>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="d-flex justify-content-between small text-muted mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="progress" style={{ height: "6px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Dates */}
        <div className="row mb-4">
          <div className="col-6">
            <div className="text-muted small">Start Date</div>
            <div className="fw-medium">{startDate}</div>
          </div>

          <div className="col-6">
            <div className="text-muted small">End Date</div>
            <div className="fw-medium">{endDate}</div>
          </div>
        </div>

        <hr className="my-3" />

        {/* Footer */}
        <div className="d-flex justify-content-between align-items-center mt-auto">

          {/* Team */}
          <div className="d-flex">
            {team.map((member, index) => (
              <div
                key={index}
                className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-2"
                style={{
                  width: "32px",
                  height: "32px",
                  fontSize: "12px",
                }}
              >
                {member}
              </div>
            ))}
          </div>

          <span className="text-muted small">
            Updated {updated}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;