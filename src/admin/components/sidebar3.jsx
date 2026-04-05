import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.svg";
import { ChevronDown, Settings } from "lucide-react";

function sidebar3({ onBackClick, onSettingsClick, active = "settings" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    name: "Mobiel Banking App",
    status: "Active",
  });

  const projects = [
    { name: "Mobiel Banking App", status: "Active" },
    { name: "Website Redesign", status: "Active" },
    { name: "Brand Strategy", status: "In Progress" },
  ];

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setIsOpen(false);
  };

  return (
    <aside className="project-sidebar">
      <div className="sidebar-top">
        <img src={logo} alt="OWOW logo" className="sidebar-logo" />
      </div>

      <div className="project-sidebar__section">
        <button
          type="button"
          className="project-sidebar__back"
          onClick={onBackClick}
        >
          <img
            src={arrow}
            alt="Back arrow"
            className="project-sidebar__back-arrow"
          />
          <span>Back to Client Page</span>
        </button>

        <div className="project-sidebar__dropdown-wrapper">
          <button
            type="button"
            className={`project-sidebar__dropdown-trigger ${
              isOpen ? "is-open" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="project-sidebar__dropdown-text">
              <span className="project-sidebar__dropdown-label">
                Current Project
              </span>
              <span className="project-sidebar__dropdown-value">
                {selectedProject.name}
              </span>
            </div>

            <ChevronDown
              size={26}
              className={`project-sidebar__chevron ${isOpen ? "rotate" : ""}`}
            />
          </button>

          {isOpen && (
            <div className="project-sidebar__dropdown-menu">
              {projects.map((project) => {
                const isSelected = project.name === selectedProject.name;

                return (
                  <button
                    key={project.name}
                    type="button"
                    className={`project-sidebar__project-item ${
                      isSelected ? "is-selected" : ""
                    }`}
                    onClick={() => handleSelectProject(project)}
                  >
                    <span className="project-sidebar__project-name">
                      {project.name}
                    </span>
                    <span className="project-sidebar__project-status">
                      {project.status}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="project-sidebar__bottom">
        <button
          type="button"
          className={`project-sidebar__settings ${
            active === "settings" ? "is-active" : ""
          }`}
          onClick={onSettingsClick}
        >
          <Settings size={22} />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}

export default sidebar3;
