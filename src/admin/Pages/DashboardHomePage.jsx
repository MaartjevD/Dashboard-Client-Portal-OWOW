import { useState } from "react";
import ProjectSidebar from "../components/ProjectSidebar";
import Topbar from "../components/Topbar";
import ProjectHero from "../components/ProjectHero";
import ProjectTabs from "../components/ProjectTabs";
import OverviewSection from "../components/OverviewSection";

function DashboardHomePage() {
  const [projectData, setProjectData] = useState({
    title: "Mobile Banking App",
    company: "ACME Corporation",
    status: "Active",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est dolor. Suspendisse potenti. Cras sit amet consectetur odio, in viverra est. Etiam pellentesque cursus dolor, et lobortis purus tristique non.",

    startDate: "28/02/2026",
    targetEndDate: "01/11/2026",

    contactPerson: "Jan Jansen",
    phone: "+31 6 123 456 78",
    email: "jan.j@acmecorp.com",
    location: "Eindhoven",

    progress: 33,
    currentPhase: "Development",
  });

  return (
    <div className="project-dashboard-page">
      <ProjectSidebar />

      <div className="project-dashboard-main">
        <Topbar />

        <main className="project-dashboard-content">
          <ProjectHero
            title={projectData.title}
            company={projectData.company}
            status={projectData.status}
          />

          <ProjectTabs />

          <OverviewSection
            projectData={projectData}
            setProjectData={setProjectData}
          />
        </main>
      </div>
    </div>
  );
}

export default DashboardHomePage;