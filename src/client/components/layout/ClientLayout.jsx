import { Outlet, useLocation, useParams } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";

import mockProjects from "../../../shared/data/mockProjects";

export default function ClientLayout() {
  const location = useLocation();
  const { projectId } = useParams();

  const isProjectRoute = location.pathname.startsWith("/projects/");
  const isProjectsPage = location.pathname === "/projects";
  const activeProject = mockProjects.find((project) => project.id === projectId) || null;

  let topbarTitle = "Main Page";
  let topbarSubtitle = "Pages / Dashboard";
  let searchPlaceholder = "Search projects, documents, updates...";

  if (isProjectsPage) {
    topbarTitle = "Projects";
    topbarSubtitle = "Pages / Projects";
    searchPlaceholder = "Search projects...";
  }

  if (isProjectRoute && activeProject) {
    topbarTitle = activeProject.name;
    topbarSubtitle = `Pages / Projects / ${activeProject.name}`;
    searchPlaceholder = `Search inside ${activeProject.name}...`;
  }

  return (
    <div className="client-app-shell">
      <Sidebar
        projects={mockProjects}
        activeProjectId={projectId || null}
        showProjectsMenu={isProjectRoute || isProjectsPage}
      />

      <div className="client-main-shell d-flex flex-column">
        <Topbar
          title={topbarTitle}
          subtitle={topbarSubtitle}
          showSearch={true}
          searchPlaceholder={searchPlaceholder}
        />

        <main className="client-page-area flex-grow-1">
          <div className="page-breadcrumb small mb-2">{topbarSubtitle}</div>
          <h1 className="page-main-title mb-4">{topbarTitle}</h1>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}