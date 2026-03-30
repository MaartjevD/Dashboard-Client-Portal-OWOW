import { useState } from "react";
import ProjectSidebar from "../components/ProjectSidebar";
import Topbar from "../components/Topbar";
import ProjectHero from "../components/ProjectHero";
import ProjectTabs from "../components/ProjectTabs";
import BudgetSection from "../components/BudgetSection";

function BudgetPage() {
  const [budgetData, setBudgetData] = useState({
    current: {
      month: "March 2026",
      budget: 2500,
      spent: 940,
    },
    previous: [
      {
        id: 1,
        month: "Februari 2026",
        budget: 3000,
        spent: 2920,
      },
      {
        id: 2,
        month: "Januari 2026",
        budget: 1200,
        spent: 1250,
      },
    ],
  });

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

          <ProjectTabs activeTab="budget" />

          <BudgetSection
            budgetData={budgetData}
            setBudgetData={setBudgetData}
          />
        </main>
      </div>
    </div>
  );
}

export default BudgetPage;