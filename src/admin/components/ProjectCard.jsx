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

  return (
    <div className="project-card">
      <div className="project-card__top">
        <div>
          <h3
            className={
              clickable
                ? "project-card__title project-card__title--clickable"
                : "project-card__title"
            }
            onClick={handleProjectClick}
          >
            {title}
          </h3>

          <span
            className={
              status === "Active"
                ? "project-card__status"
                : "project-card__status project-card__status--blue"
            }
          >
            {status}
          </span>
        </div>

        <button className="project-card__menu">⋮</button>
      </div>

      <div className="project-card__progress-block">
        <div className="project-card__progress-head">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="project-card__progress-bar">
          <div
            className="project-card__progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="project-card__dates">
        <div className="project-card__date-item">
          <span className="project-card__date-label">Start Date</span>
          <span className="project-card__date-value">{startDate}</span>
        </div>

        <div className="project-card__date-item">
          <span className="project-card__date-label">End Date</span>
          <span className="project-card__date-value">{endDate}</span>
        </div>
      </div>

      <div className="project-card__divider"></div>

      <div className="project-card__footer">
        <div className="project-card__team">
          {team.map((member, index) => (
            <div key={index} className="project-card__member">
              {member}
            </div>
          ))}
        </div>

        <span className="project-card__updated">Updated {updated}</span>
      </div>
    </div>
  );
}

export default ProjectCard;