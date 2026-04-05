import { useParams, useSearchParams, Navigate } from "react-router-dom";

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

import { getProjectById } from "../utils/projectHelpers";

function ProjectPage() {
  const { projectId } = useParams();
  const [searchParams] = useSearchParams();

  const tab = (searchParams.get("tab") || "overview").toLowerCase();
  const project = getProjectById(projectId);

  if (!project) {
    return <Navigate to="/dashboard" replace />;
  }

  const renderContent = () => {
    switch (tab) {
      case "budget":
        return <ProjectBudgetPage project={project} />;
      case "documents":
        return <ProjectDocumentsPage project={project} />;
      case "update":
      case "updates":
        return <ProjectUpdatePage project={project} />;
      case "overview":
      default:
        return <ProjectOverviewPage project={project} />;
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
            title={project.name}
            subtitle={`Assigned to ${project.contactPerson}`}
            badge={project.status}
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