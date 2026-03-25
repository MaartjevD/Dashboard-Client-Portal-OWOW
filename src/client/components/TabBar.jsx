import { useState } from "react";

function TabBar() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="project-tabbar d-flex align-items-center">
      <button
        type="button"
        onClick={() => setActiveTab("overview")}
        className={`project-tabbar__tab d-flex align-items-center ${
          activeTab === "overview" ? "project-tabbar__tab--active" : ""
        }`}
      >
        <span className="project-tabbar__icon">◎</span>
        <span>OVERVIEW</span>
      </button>

      <button
        type="button"
        onClick={() => setActiveTab("budget")}
        className={`project-tabbar__tab d-flex align-items-center ${
          activeTab === "budget" ? "project-tabbar__tab--active" : ""
        }`}
      >
        <span className="project-tabbar__icon">▣</span>
        <span>BUDGET</span>
      </button>

      <button
        type="button"
        onClick={() => setActiveTab("documents")}
        className={`project-tabbar__tab d-flex align-items-center ${
          activeTab === "documents" ? "project-tabbar__tab--active" : ""
        }`}
      >
        <span className="project-tabbar__icon">▤</span>
        <span>DOCUMENTS</span>
      </button>

      <button
        type="button"
        onClick={() => setActiveTab("update")}
        className={`project-tabbar__tab d-flex align-items-center ${
          activeTab === "update" ? "project-tabbar__tab--active" : ""
        }`}
      >
        <span className="project-tabbar__icon">◫</span>
        <span>UPDATE</span>
      </button>
    </div>
  );
}

export default TabBar;