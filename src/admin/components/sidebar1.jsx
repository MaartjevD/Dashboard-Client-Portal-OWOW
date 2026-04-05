import React from "react";
import "./sidebar1.jsx";
import logo from "../../assets/logo.svg";
import { BriefcaseBusiness, Settings } from "lucide-react";

const ClientSelectSidebar = ({
  active = "workspace",
  onWorkspaceClick,
  onSettingsClick,
}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <img src={logo} alt="OWOW logo" className="sidebar-logo" />
      </div>

      <nav className="sidebar-nav">
        <button
          type="button"
          className={`sidebar-btn ${active === "workspace" ? "active" : ""}`}
          onClick={onWorkspaceClick}
        >
          <BriefcaseBusiness size={22} strokeWidth={2} />
          <span>Client Workspace</span>
        </button>

        <button
          type="button"
          className={`sidebar-btn ${active === "settings" ? "active" : ""}`}
          onClick={onSettingsClick}
        >
          <Settings size={22} strokeWidth={2} />
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  );
};

export default ClientSelectSidebar;
