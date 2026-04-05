import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mockProjects from "../../../shared/data/mockProjects";
import logo from "../../../shared/styles/logo.png";

function Sidebar() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const isProjectPage = location.pathname.startsWith("/projects");

  const [isProjectsOpen, setIsProjectsOpen] = useState(isProjectPage);

  const sortedProjects = useMemo(
    () => [...mockProjects].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="OWOW dashboard logo" className="sidebar-logo-image" />
      </div>

      <div className="sidebar-divider"></div>

      <nav aria-label="Primary">
        <ul className="sidebar-menu list-unstyled m-0 p-0">
          <li>
            <Link to="/dashboard" className={`sidebar-item ${isDashboard ? "active" : ""}`}>
              <span className="d-flex align-items-center gap-3">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </span>
            </Link>
          </li>

          <li>
            <button
              type="button"
              onClick={() => setIsProjectsOpen((prev) => !prev)}
              className={`sidebar-item ${isProjectPage ? "active" : ""}`}
              aria-expanded={isProjectsOpen}
              aria-controls="sidebar-project-list"
            >
              <span className="d-flex align-items-center gap-3">
                <i className="bi bi-folder2-open"></i>
                <span>Projects</span>
              </span>
              <i className={`bi ${isProjectsOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
            </button>
          </li>

          {isProjectsOpen && (
            <ul id="sidebar-project-list" className="project-submenu list-unstyled">
              {sortedProjects.map((project) => {
                const isActive = location.pathname === `/projects/${project.id}`;

                return (
                  <li key={project.id}>
                    <Link
                      to={`/projects/${project.id}?tab=overview`}
                      className={`project-subitem ${isActive ? "active-subitem" : ""}`}
                    >
                      <i className="bi bi-signpost-split"></i>
                      <span>{project.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          <li>
            <button type="button" className="sidebar-item sidebar-item-disabled" disabled>
              <span className="d-flex align-items-center gap-3">
                <i className="bi bi-bar-chart"></i>
                <span>Statistics</span>
              </span>
              <span className="sidebar-coming-soon">Soon</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;