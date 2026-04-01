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
  const isDashboardPage = location.pathname === "/dashboard";

  const activeProject = mockProjects.find((project) => project.id === projectId) || null;

  let topbarTitle = "Dashboard";
  let topbarSubtitle = "Welcome to your client portal overview.";
  let showSearch = true;
  let searchPlaceholder = "Search...";

  if (isProjectsPage) {
    topbarTitle = "Projects";
    topbarSubtitle = "Browse all active and completed projects.";
    searchPlaceholder = "Search projects...";
  }

  if (isProjectRoute && activeProject) {
    topbarTitle = activeProject.name;
    topbarSubtitle = "Track progress, budget, files, and updates.";
    searchPlaceholder = `Search inside ${activeProject.name}...`;
  }

  if (isDashboardPage) {
    topbarTitle = "Dashboard";
    topbarSubtitle = "Monitor projects, updates, and key metrics.";
    searchPlaceholder = "Search dashboard content...";
  }

  return (
    <div className="client-shell d-flex">
      <Sidebar
        projects={mockProjects}
        activeProjectId={projectId || null}
        showProjectsMenu={isProjectRoute || isProjectsPage}
      />

      <div className="client-main d-flex flex-column flex-grow-1 min-vh-100">
        <Topbar
          title={topbarTitle}
          subtitle={topbarSubtitle}
          showSearch={showSearch}
          searchPlaceholder={searchPlaceholder}
        />

        <main className="page-content flex-grow-1">
          <div className="container-fluid px-3 px-lg-4 py-4">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}