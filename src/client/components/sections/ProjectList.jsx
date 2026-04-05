import { useNavigate } from "react-router-dom";
import ProgressBar from "../common/ProgressBar";
import { formatDate, getStatusClass } from "../../utils/projectHelpers";

function ProjectList({ projects }) {
  const navigate = useNavigate();

  return (
    <section className="mb-5">
      <h3 className="section-title">Projects Overview (Active Projects)</h3>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-12 col-lg-6 col-xl-4" key={project.id}>
            <div
              className="custom-card project-card clickable-card"
              onClick={() => navigate(`/projects/${project.id}?tab=overview`)}
            >
              <div className="project-card-top">
                <h4 className="project-title">{project.name}</h4>
                <span className={`status-badge ${getStatusClass(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <div className="project-dates">
                <div className="date-item">
                  <i className="bi bi-calendar4-event"></i>
                  <span>{formatDate(project.startDate)}</span>
                </div>

                <div className="date-item">
                  <i className="bi bi-calendar4-event text-danger"></i>
                  <span>{formatDate(project.deadline)}</span>
                </div>
              </div>

              <ProgressBar percent={project.progress} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;