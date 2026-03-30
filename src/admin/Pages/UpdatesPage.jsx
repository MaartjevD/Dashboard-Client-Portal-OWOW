import { useState } from "react";
import ProjectSidebar from "../components/ProjectSidebar";
import Topbar from "../components/Topbar";
import ProjectHero from "../components/ProjectHero";
import ProjectTabs from "../components/ProjectTabs";
import UpdatesSection from "../components/UpdatesSection";

function UpdatesPage() {
  const [updatesData, setUpdatesData] = useState([
    {
      id: 1,
      title: "Sprint Planning Meeting Scheduled",
      category: "Mobile App Development",
      date: "March 14, 2026",
      time: "4:15 PM",
      text: "Next sprint planning meeting set for March 18th at 10:00 AM. Agenda includes development roadmap review.",
      status: "empty",
    },
    {
      id: 2,
      title: "Technical Documentation Updated",
      category: "E-commerce Platform",
      date: "March 13, 2026",
      time: "11:20 AM",
      text: "System architecture document updated with latest API specifications and database schema designs.",
      status: "current",
    },
    {
      id: 3,
      title: "Development Environment Ready",
      category: "Website Redesign",
      date: "March 12, 2026",
      time: "9:45 AM",
      text: "All development environments configured. Team members have access to staging servers and repositories.",
      status: "done",
    },
    {
      id: 4,
      title: "New Team Member Onboarded",
      category: "Brand Strategy",
      date: "March 10, 2026",
      time: "1:00 PM",
      text: "Taylor Kim joined as Senior UX Designer. Will lead user research and interface design initiatives.",
      status: "done",
    },
    {
      id: 5,
      title: "Budget Allocation Adjusted",
      category: "Multiple Projects",
      date: "March 8, 2026",
      time: "3:30 PM",
      text: "Updated budget allocation for Q2. Additional resources allocated to development and testing phases.",
      status: "done",
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

          <ProjectTabs activeTab="updates" />

          <UpdatesSection
            updatesData={updatesData}
            setUpdatesData={setUpdatesData}
          />
        </main>
      </div>
    </div>
  );
}

export default UpdatesPage;