import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";
import PageHeader from "../components/layout/PageHeader";
import TabBar from "../components/layout/TabBar";
import Footer from "../components/layout/Footer";

import ChatButton from "../components/common/ChatButton";

import BudgetStatsRow from "../components/sections/BudgetStatsRow";
import BudgetProgressCard from "../components/sections/BudgetProgressCard";
import MonthlyExpensesCard from "../components/sections/MonthlyExpensesCard";
import BudgetHistoryCard from "../components/sections/BudgetHistoryCard";

function ProjectBudgetPage() {
  return (
    <div className="dashboard-layout">
      <Sidebar variant="projects" activeProject="Project Alpha" />

      <div className="dashboard-main">
        <TopNavbar />

        <div className="dashboard-content">
          <PageHeader
            breadcrumb="Pages / Dashboard / Projects"
            title="Project Alpha"
            subtitle="Assigned to Micheal Jackson"
            badge="In Progress"
          />

          <TabBar activeTab="Budget" />

          <BudgetStatsRow />
          <BudgetProgressCard />
          <MonthlyExpensesCard />
          <BudgetHistoryCard />
        </div>

        <ChatButton />
        <Footer />
      </div>
    </div>
  );
}

export default ProjectBudgetPage;