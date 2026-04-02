// import { useState } from "react";

// function TabBar() {
//   const [activeTab, setActiveTab] = useState("overview");

//   return (
//     <div className="project-tabbar d-flex align-items-center">
//       <button
//         type="button"
//         onClick={() => setActiveTab("overview")}
//         className={`project-tabbar__tab d-flex align-items-center ${
//           activeTab === "overview" ? "project-tabbar__tab--active" : ""
//         }`}
//       >
//         <span className="project-tabbar__icon">◎</span>
//         <span>OVERVIEW</span>
//       </button>

//       <button
//         type="button"
//         onClick={() => setActiveTab("budget")}
//         className={`project-tabbar__tab d-flex align-items-center ${
//           activeTab === "budget" ? "project-tabbar__tab--active" : ""
//         }`}
//       >
//         <span className="project-tabbar__icon">▣</span>
//         <span>BUDGET</span>
//       </button>

//       <button
//         type="button"
//         onClick={() => setActiveTab("documents")}
//         className={`project-tabbar__tab d-flex align-items-center ${
//           activeTab === "documents" ? "project-tabbar__tab--active" : ""
//         }`}
//       >
//         <span className="project-tabbar__icon">▤</span>
//         <span>DOCUMENTS</span>
//       </button>

//       <button
//         type="button"
//         onClick={() => setActiveTab("update")}
//         className={`project-tabbar__tab d-flex align-items-center ${
//           activeTab === "update" ? "project-tabbar__tab--active" : ""
//         }`}
//       >
//         <span className="project-tabbar__icon">◫</span>
//         <span>UPDATE</span>
//       </button>
//     </div>
//   );
// }

// export default TabBar;
// const tabs = [
//   { id: 1, label: "Overview", icon: "bi-bullseye" },
//   { id: 2, label: "Budget", icon: "bi-wallet2" },
//   { id: 3, label: "Documents", icon: "bi-file-earmark-text" },
//   { id: 4, label: "Update", icon: "bi-calendar4-event" },
// ];

// function TabBar({ activeTab = "Overview" }) {
//   return (
//     <div className="tabbar-wrapper">
//       <div className="tabbar">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             className={`tabbar-item ${activeTab === tab.label ? "active" : ""}`}
//           >
//             <i className={`bi ${tab.icon}`}></i>
//             <span>{tab.label.toUpperCase()}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TabBar;






// import { useLocation, useNavigate } from "react-router-dom";

// const tabs = [
//   { label: "Overview", icon: "bi-bullseye", path: "/projects/alpha/overview" },
//   { label: "Budget", icon: "bi-wallet2", path: "/projects/alpha/budget" },
//   { label: "Documents", icon: "bi-file-earmark-text", path: "/projects/alpha/documents" },
//   { label: "Update", icon: "bi-calendar4-event", path: "/projects/alpha/update" },
// ];

// function TabBar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <div className="tabbar-wrapper">
//       <div className="tabbar">
//         {tabs.map((tab) => {
//           const isActive = location.pathname === tab.path;

//           return (
//             <button
//               key={tab.label}
//               type="button"
//               onClick={() => navigate(tab.path)}
//               className={`tabbar-item ${isActive ? "active" : ""}`}
//             >
//               <i className={`bi ${tab.icon}`}></i>
//               <span>{tab.label.toUpperCase()}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default TabBar;






// import { useNavigate, useParams, useSearchParams } from "react-router-dom";

// function TabBar() {
//   const navigate = useNavigate();
//   const { projectId } = useParams();
//   const [searchParams] = useSearchParams();

//   const currentTab = searchParams.get("tab") || "overview";

//   const tabs = [
//     { label: "Overview", icon: "bi-bullseye", value: "overview" },
//     { label: "Budget", icon: "bi-wallet2", value: "budget" },
//     { label: "Documents", icon: "bi-file-earmark-text", value: "documents" },
//     { label: "Update", icon: "bi-calendar4-event", value: "update" },
//   ];

//   const handleTabChange = (tabValue) => {
//     navigate(`/projects/${projectId}?tab=${tabValue}`);
//   };

//   return (
//     <div className="tabbar-wrapper">
//       <div className="tabbar">
//         {tabs.map((tab) => {
//           const isActive = currentTab === tab.value;

//           return (
//             <button
//               key={tab.value}
//               type="button"
//               onClick={() => handleTabChange(tab.value)}
//               className={`tabbar-item ${isActive ? "active" : ""}`}
//             >
//               <i className={`bi ${tab.icon}`}></i>
//               <span>{tab.label.toUpperCase()}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default TabBar;

























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