import { NavLink } from "react-router-dom";

function ProjectTabs() {
  return (
    <div className="border-bottom mb-4">
      <ul className="nav nav-tabs">

        <li className="nav-item">
          <NavLink
            to="/project-dashboard"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active fw-semibold" : "text-muted"}`
            }
          >
            OVERVIEW
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/budget"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active fw-semibold" : "text-muted"}`
            }
          >
            BUDGET
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/updates"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active fw-semibold" : "text-muted"}`
            }
          >
            UPDATES
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/documents"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active fw-semibold" : "text-muted"}`
            }
          >
            DOCUMENTEN
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default ProjectTabs;