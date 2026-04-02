// import { useParams, useSearchParams } from "react-router-dom";

// import Sidebar from "../components/layout/Sidebar";
// import TopNavbar from "../components/layout/TopNavbar";
// import PageHeader from "../components/layout/PageHeader";
// import TabBar from "../components/layout/TabBar";
// import Footer from "../components/layout/Footer";
// import ChatButton from "../components/common/ChatButton";

// import ProjectOverviewPage from "./ProjectOverviewPage";
// import ProjectBudgetPage from "./ProjectBudgetPage";
// import ProjectDocumentsPage from "./ProjectDocumentsPage";
// import ProjectUpdatePage from "./ProjectUpdatePage";

// function ProjectPage() {
//   const { projectId } = useParams();
//   const [searchParams] = useSearchParams();

//   const tab = (searchParams.get("tab") || "overview").toLowerCase();

//   const projectNames = {
//     alpha: "Project Alpha",
//     beta: "Project Beta",
//     teta: "Project Teta",
//   };

//   const projectTitle = projectNames[projectId] || `Project ${projectId}`;

//   const renderTabContent = () => {
//     switch (tab) {
//       case "budget":
//         return <ProjectBudgetPage />;
//       case "documents":
//         return <ProjectDocumentsPage />;
//       case "update":
//       case "updates":
//         return <ProjectUpdatePage />;
//       case "overview":
//       default:
//         return <ProjectOverviewPage />;
//     }
//   };

//   return (
//     <div className="dashboard-layout">
//       <Sidebar />

//       <div className="dashboard-main">
//         <TopNavbar />

//         <div className="dashboard-content">
//           <PageHeader
//             breadcrumb="Pages / Dashboard / Projects"
//             title={projectTitle}
//             subtitle="Assigned to Micheal Jackson"
//             badge="In Progress"
//           />

//           <TabBar />

//           {renderTabContent()}
//         </div>

//         <ChatButton />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default ProjectPage;










// import { useParams, useSearchParams } from "react-router-dom";
// // import { getProjectData } from "../data/getProjectData";

// import Sidebar from "../components/Sidebar";
// import TopNavbar from "../components/TopNavbar";
// import PageHeader from "../components/PageHeader";
// import TabBar from "../components/TabBar";
// import ChatButton from "../components/ChatButton";
// import Footer from "../components/Footer";

// import ProjectOverviewPage from "./ProjectOverviewPage";
// import ProjectBudgetPage from "./ProjectBudgetPage";
// import ProjectDocumentsPage from "./ProjectDocumentsPage";
// import ProjectUpdatePage from "./ProjectUpdatePage";




// export default function ProjectPage() {
//   const { projectId } = useParams();
//   const [searchParams] = useSearchParams();

//   const activeTab = searchParams.get("tab") || "overview";
//   const project = getProjectData(projectId);

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "budget":
//         return <ProjectBudgetPage project={project} />;
//       case "documents":
//         return <ProjectDocumentsPage project={project} />;
//       case "update":
//         return <ProjectUpdatePage project={project} />;
//       case "overview":
//       default:
//         return <ProjectOverviewPage project={project} />;
//     }
//   };

//   return (
//     <div className="d-flex min-vh-100 bg-dark text-white">
//       <Sidebar />

//       <div className="flex-grow-1 d-flex flex-column">
//         <TopNavbar />
//         <PageHeader project={project} />
//         <TabBar projectId={project.id} activeTab={activeTab} />

//         <main className="flex-grow-1 px-4 py-3">{renderTabContent()}</main>

//         <ChatButton />
//         <Footer />
//       </div>
//     </div>
//   );
// }



import { useParams, useSearchParams } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";
import PageHeader from "../components/layout/PageHeader";
import TabBar from "../components/layout/TabBar";
import Footer from "../components/layout/Footer";
import ChatButton from "../components/common/ChatButton";

import ProjectOverviewPage from "./ProjectOverviewPage";
import ProjectBudgetPage from "./ProjectBudgetPage";
import ProjectDocumentsPage from "./ProjectDocumentsPage";
import ProjectUpdatePage from "./ProjectUpdatePage";

function ProjectPage() {
  const { projectId } = useParams();
  const [searchParams] = useSearchParams();

  const tab = (searchParams.get("tab") || "overview").toLowerCase();

  const projectNames = {
    alpha: "Project Alpha",
    beta: "Project Beta",
    teta: "Project Teta",
  };

  const projectTitle = projectNames[projectId] || `Project ${projectId}`;

  const renderContent = () => {
    switch (tab) {
      case "budget":
        return <ProjectBudgetPage />;
      case "documents":
        return <ProjectDocumentsPage />;
      case "update":
      case "updates":
        return <ProjectUpdatePage />;
      case "overview":
      default:
        return <ProjectOverviewPage />;
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <TopNavbar />

        <div className="dashboard-content">
          <PageHeader
            breadcrumb="Pages / Dashboard / Projects"
            title={projectTitle}
            subtitle="Assigned to Micheal Jackson"
            badge="In Progress"
          />

          <TabBar />

          {renderContent()}
        </div>

        <ChatButton />
        <Footer />
      </div>
    </div>
  );
}

export default ProjectPage;