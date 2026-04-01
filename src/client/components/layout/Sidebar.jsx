import { NavLink } from "react-router-dom";

export default function Sidebar({
  projects = [],
  activeProjectId = null,
  showProjectsMenu = false,
}) {
  return (
    <aside className="client-sidebar d-flex flex-column flex-shrink-0 p-3">
      <div className="sidebar-brand mb-4">
        <h5 className="m-0 fw-bold">OWOW</h5>
        <small className="sidebar-brand-subtitle">Client Portal</small>
      </div>

      <nav className="d-flex flex-column gap-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `sidebar-link d-flex align-items-center gap-2 ${isActive ? "active" : ""}`
          }
        >
          <i className="bi bi-grid-1x2-fill"></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `sidebar-link d-flex align-items-center gap-2 ${isActive ? "active" : ""}`
          }
        >
          <i className="bi bi-folder-fill"></i>
          <span>Projects</span>
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
                  {isProjectActive && <i className="bi bi-chevron-right"></i>}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
}