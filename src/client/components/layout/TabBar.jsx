import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getValidProjectTab } from "../../utils/projectHelpers";

const tabs = [
  { label: "Overview", icon: "bi-bullseye", value: "overview" },
  { label: "Budget", icon: "bi-wallet2", value: "budget" },
  { label: "Documents", icon: "bi-file-earmark-text", value: "documents" },
  { label: "Updates", icon: "bi-calendar4-event", value: "update" },
];

function TabBar() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [searchParams] = useSearchParams();

  const currentTab = getValidProjectTab(searchParams.get("tab"));

  const handleTabChange = (tabValue) => {
    navigate(`/projects/${projectId}?tab=${tabValue}`);
  };

  return (
    <div className="tabbar-wrapper">
      <div className="tabbar" role="tablist" aria-label="Project sections">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={isActive}
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
