import { NavLink } from "react-router-dom";

function ProjectTabs({ activeTab }) {
  return (
    <div className="project-tabs">
      <NavLink
        to="/project-dashboard"
        className={
          activeTab === "overview"
            ? "project-tabs__item project-tabs__item--active"
            : "project-tabs__item"
        }
      >
        OVERVIEW
      </NavLink>

      <NavLink
        to="/budget"
        className={
          activeTab === "budget"
            ? "project-tabs__item project-tabs__item--active"
            : "project-tabs__item"
        }
      >
        BUDGET
      </NavLink>

      <NavLink
        to="/updates"
        className={
          activeTab === "updates"
            ? "project-tabs__item project-tabs__item--active"
            : "project-tabs__item"
        }
      >
        UPDATES
      </NavLink>

      <NavLink
        to="/documents"
        className={
          activeTab === "documents"
            ? "project-tabs__item project-tabs__item--active"
            : "project-tabs__item"
        }
      >
        DOCUMENTEN
      </NavLink>
    </div>
  );
}

export default ProjectTabs;