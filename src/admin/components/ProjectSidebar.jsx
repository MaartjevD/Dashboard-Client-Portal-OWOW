import { useNavigate } from "react-router-dom";

function ProjectSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="project-sidebar">
      <div>
        <div className="project-sidebar__logo">OWOW</div>

        <div
          className="project-sidebar__back"
          onClick={() => navigate("/workspace")}
        >
          ← Back to Client Page
        </div>

        <div className="project-sidebar__current-project-box">
          <span className="project-sidebar__current-label">
            Current Project
          </span>
          <div className="project-sidebar__current-name">
            Mobile Banking App
          </div>
        </div>

      
      </div>
    </aside>
  );
}

export default ProjectSidebar;