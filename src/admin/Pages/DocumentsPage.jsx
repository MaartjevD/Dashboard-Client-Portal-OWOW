import { useState } from "react";
import ProjectSidebar from "../components/ProjectSidebar";
import Topbar from "../components/Topbar";
import ProjectHero from "../components/ProjectHero";
import ProjectTabs from "../components/ProjectTabs";
import DocumentsSection from "../components/DocumentsSection";

function DocumentsPage() {
  const [documentsData, setDocumentsData] = useState([
    {
      id: 1,
      title: "Figma Design Files",
      description: "Live design files and interactive prototypes",
      linkLabel: "Jira Link",
      jiraUrl: "https://jira.atlassian.com",
      status: "Ongoing",
      color: "blue",
    },
    {
      id: 2,
      title: "Design System Documentation",
      description: "UI components and design patterns library",
      linkLabel: "Jira Link",
      jiraUrl: "https://jira.atlassian.com",
      status: "Ongoing",
      color: "orange",
    },
    {
      id: 3,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur.",
      linkLabel: "Jira Link",
      jiraUrl: "https://jira.atlassian.com",
      status: "Ongoing",
      color: "yellow",
    },
    {
      id: 4,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur.",
      linkLabel: "Jira Link",
      jiraUrl: "https://jira.atlassian.com",
      status: "Ongoing",
      color: "green",
    },
  ]);

  return (
    <div className="project-dashboard-page">
      <ProjectSidebar />

      <div className="project-dashboard-main">
        <Topbar />

        <main className="project-dashboard-content">
          <ProjectHero
            title="Mobile Banking App"
            company="ACME Corporation"
            status="Active"
          />

          <ProjectTabs activeTab="documents" />

          <DocumentsSection
            documentsData={documentsData}
            setDocumentsData={setDocumentsData}
          />
        </main>
      </div>
    </div>
  );
}

export default DocumentsPage;