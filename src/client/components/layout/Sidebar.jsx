import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mockProjects from "../../../shared/data/mockProjects";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";
  const isProjectPage = location.pathname.startsWith("/projects");

  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">OWOW</div>

      <div className="sidebar-divider"></div>

      <ul className="sidebar-menu list-unstyled m-0 p-0">
        <li>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className={`sidebar-item ${isDashboard ? "active" : ""}`}
          >
            <span className="d-flex align-items-center gap-3">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </span>
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => setIsProjectsOpen((prev) => !prev)}
            className={`sidebar-item ${isProjectPage ? "active" : ""}`}
          >
            <span className="d-flex align-items-center gap-3">
              <i className="bi bi-folder2-open"></i>
              <span>Projects</span>
            </span>
            <i className={`bi ${isProjectsOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
          </button>
        </li>

        {isProjectsOpen && (
          <ul className="project-submenu list-unstyled">
            {mockProjects.map((project) => {
              const isActive = location.pathname === `/projects/${project.id}`;

              return (
                <li key={project.id}>
                  <button
                    type="button"
                    onClick={() => navigate(`/projects/${project.id}?tab=overview`)}
                    className={`project-subitem ${isActive ? "active-subitem" : ""}`}
                  >
                    <i className="bi bi-signpost-split"></i>
                    <span>{project.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        <li>
          <button type="button" className="sidebar-item">
            <span className="d-flex align-items-center gap-3">
              <i className="bi bi-bar-chart"></i>
              <span>Statistics</span>
            </span>
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;