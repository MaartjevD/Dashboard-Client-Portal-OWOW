import React from "react";
import arrow from "../../assets/arrow.svg";

import overviewIcon from "../../assets/target.svg";
import budgetIcon from "../../assets/euro.svg";
import updatesIcon from "../../assets/calender.svg";
import documentenIcon from "../../assets/document.svg";

function ProjectHeader({
  onBackClick,
  activeTab = "budget",
  onTabChange,
  project = {
    name: "Mobiele Banking App",
    client: "ACME Corporation",
    status: "Active",
  },
}) {
  const tabs = [
    { key: "overview", label: "OVERVIEW", icon: overviewIcon },
    { key: "budget", label: "BUDGET", icon: budgetIcon },
    { key: "updates", label: "UPDATES", icon: updatesIcon },
    { key: "documenten", label: "DOCUMENTEN", icon: documentenIcon },
  ];

  return (
    <header className="project-header">
      <div className="project-header__top">
        <button
          type="button"
          className="project-header__back"
          onClick={onBackClick}
        >
          <img
            src={arrow}
            alt="Back arrow"
            className="project-header__back-arrow"
          />
          <span>Back to Projects</span>
        </button>

        <div className="project-header__info">
          <div className="project-header__title-row">
            <h1 className="project-header__title">{project.name}</h1>

            <span className="project-header__status">{project.status}</span>
          </div>

          <p className="project-header__client">{project.client}</p>
        </div>
      </div>

      <nav className="project-header__tabs">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              className={`project-header__tab ${isActive ? "is-active" : ""}`}
              onClick={() => onTabChange?.(tab.key)}
            >
              <img
                src={tab.icon}
                alt={tab.label}
                className="project-header__icon"
              />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}

export default ProjectHeader;
