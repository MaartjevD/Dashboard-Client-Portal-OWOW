import mockProjects from "../../shared/data/mockProjects";

import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";
import PageHeader from "../components/layout/PageHeader";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/common/Breadcrumb";
import StatsSection from "../components/common/StatsSection";
import ProjectList from "../components/sections/ProjectList";
import BudgetList from "../components/sections/BudgetList";
import UpdateList from "../components/sections/UpdateList";

function DashboardPage() {
  const totalProjects = mockProjects.length;
  const inProgress = mockProjects.filter((p) => p.status === "In Progress").length;
  const planning = mockProjects.filter((p) => p.status === "Planning").length;
  const completed = mockProjects.filter((p) => p.status === "Completed").length;

  const stats = [
    {
      id: 1,
      title: "Total Projects",
      value: String(totalProjects).padStart(2, "0"),
      icon: "bi-folder2-open",
      color: "stat-yellow",
    },
    {
      id: 2,
      title: "In Progress",
      value: String(inProgress).padStart(2, "0"),
      icon: "bi-graph-up-arrow",
      color: "stat-blue",
    },
    {
      id: 3,
      title: "Planning",
      value: String(planning).padStart(2, "0"),
      icon: "bi-clock-history",
      color: "stat-orange",
    },
    {
      id: 4,
      title: "Completed",
      value: String(completed).padStart(2, "0"),
      icon: "bi-check-circle",
      color: "stat-green",
    },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <TopNavbar />

        <div className="dashboard-content">
          <PageHeader
            breadcrumb={<Breadcrumb />}
            title="Main Page"
            subtitle="Overview of current projects, budgets, and latest activity."
          />

          <StatsSection data={stats} />
          <ProjectList projects={mockProjects} />
          <BudgetList projects={mockProjects} />
          <UpdateList projects={mockProjects} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default DashboardPage;
