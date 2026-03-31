import React from "react";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.png";
import { Settings } from "lucide-react";

function ProjectSidebar({ onBackClick, onSettingsClick, active = "back" }) {
  return (
    <aside className="client-select-sidebar">
      <div className="client-select-sidebar__top">
        <img
          src={logo}
          alt="OWOW logo"
          className="client-select-sidebar__logo"
        />
      </div>

      <nav className="client-select-sidebar__nav">
        <button
          type="button"
          className={`client-select-sidebar__button ${
            active === "back" ? "is-active" : ""
          }`}
          onClick={onBackClick}
        >
          <img
            src={arrow}
            alt="Back arrow"
            className="client-select-sidebar__arrow"
          />
          <span>Back to Client Page</span>
        </button>

        <button
          type="button"
          className={`client-select-sidebar__button ${
            active === "settings" ? "is-active" : ""
          }`}
          onClick={onSettingsClick}
        >
          <Settings size={22} />
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  );
}

export default ProjectSidebar;
