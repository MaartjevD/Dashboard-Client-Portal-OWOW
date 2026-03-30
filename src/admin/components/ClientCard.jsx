import { useNavigate } from "react-router-dom";

function ClientCard({
  name,
  company,
  projects,
  status,
  updated,
  initials,
}) {
  const navigate = useNavigate();

  const handleClientClick = () => {
    if (name === "Sarah Johnson") {
      navigate("/projects");
    }
  };

  return (
    <div className="client-card">
      <div className="client-card__header">
        <div className="client-card__avatar">{initials}</div>

        <div className="client-card__identity">
          <h3
            className={
              name === "Sarah Johnson"
                ? "client-card__name client-card__name--clickable"
                : "client-card__name"
            }
            onClick={handleClientClick}
          >
            {name}
          </h3>

          <p className="client-card__company">{company}</p>
        </div>
      </div>

      <div className="client-card__meta">
        <span className="client-card__status">{status}</span>
        <span className="client-card__projects">{projects} projects</span>
      </div>

      <div className="client-card__divider"></div>

      <div className="client-card__footer">
        <span className="client-card__updated">Updated {updated}</span>

        <div className="client-card__icons">
          <button className="client-card__icon-button">👁</button>
          <button className="client-card__icon-button">✏️</button>
          <button className="client-card__icon-button">⚙️</button>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;