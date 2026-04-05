import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function TabBar() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [searchParams] = useSearchParams();

  const currentTab = searchParams.get("tab") || "overview";

  const tabs = [
    { label: "Overview", icon: "bi-bullseye", value: "overview" },
    { label: "Budget", icon: "bi-wallet2", value: "budget" },
    { label: "Documents", icon: "bi-file-earmark-text", value: "documents" },
    { label: "Update", icon: "bi-calendar4-event", value: "update" },
  ];

  const handleTabChange = (tabValue) => {
    navigate(`/projects/${projectId}?tab=${tabValue}`);
  };

  return (
    <div className="tabbar-wrapper">
      <div className="tabbar">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => handleTabChange(tab.value)}
              className={`tabbar-item ${isActive ? "active" : ""}`}
            >
              <i className={`bi ${tab.icon}`}></i>
              <span>{tab.label.toUpperCase()}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TabBar;