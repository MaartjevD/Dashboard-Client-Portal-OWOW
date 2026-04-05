import { NavLink } from "react-router-dom";
import logo from "../../../shared/assets/owow-logo.png";

export default function Sidebar({
  projects = [],
  activeProjectId = null,
  showProjectsMenu = false,
}) {
  return (
    <aside className="client-sidebar d-flex flex-column flex-shrink-0">
      <div className="sidebar-inner d-flex flex-column h-100 p-3 p-lg-4">
        <div className="sidebar-brand mb-4">
          <img src={logo} alt="OWOW" className="sidebar-logo img-fluid" />
        </div>

        <nav className="sidebar-nav d-flex flex-column gap-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `sidebar-link d-flex align-items-center gap-3 ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-icon d-inline-flex align-items-center justify-content-center">
              <i className="bi bi-grid-1x2"></i>
            </span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `sidebar-link d-flex align-items-center justify-content-between gap-3 ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="d-flex align-items-center gap-3">
              <span className="sidebar-icon d-inline-flex align-items-center justify-content-center">
                <i className="bi bi-folder2-open"></i>
              </span>
              <span>Projects</span>
            </span>
            <i className="bi bi-chevron-right sidebar-chevron"></i>
          </NavLink>

          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              `sidebar-link d-flex align-items-center gap-3 ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-icon d-inline-flex align-items-center justify-content-center">
              <i className="bi bi-bar-chart"></i>
            </span>
            <span>Statistics</span>
          </NavLink>
        </nav>

        {showProjectsMenu && projects.length > 0 && (
          <div className="sidebar-projects mt-4">
            <p className="sidebar-section-title mb-2">Project List</p>

            <div className="d-flex flex-column gap-2">
              {projects.map((project) => {
                const isProjectActive = project.id === activeProjectId;

                return (
                  <NavLink
                    key={project.id}
                    to={`/projects/${project.id}?tab=overview`}
                    className={`sidebar-sublink d-flex align-items-center justify-content-between ${
                      isProjectActive ? "active" : ""
                    }`}
                  >
                    <span>{project.name}</span>
                    {isProjectActive ? <i className="bi bi-chevron-right"></i> : null}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}