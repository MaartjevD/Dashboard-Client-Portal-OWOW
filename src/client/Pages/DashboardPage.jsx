// import Navbar from "../components/Navbar";
// import Header from "../components/Header";
// import TabBar from "../components/TabBar";
// import SlackChatIcon from "../components/SlackChatIcon";

// function DashboardPage() {
//   return (
//     <div className="dashboard-page">
//       <div className="dashboard-container">
//         <Navbar />
//         <Header />
//         <TabBar />
//       </div>

//       <SlackChatIcon />
//     </div>
//   );
// }

// export default DashboardPage;
import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";
import PageHeader from "../components/layout/PageHeader";
import Footer from "../components/layout/Footer";

import StatsSection from "../components/common/StatsSection";
import ProjectList from "../components/sections/ProjectList";
import BudgetList from "../components/sections/BudgetList";
import UpdateList from "../components/sections/UpdateList";

function DashboardPage() {
  const stats = [
    {
      id: 1,
      title: "Total Projects",
      value: "12",
      icon: "bi-folder2-open",
      color: "stat-yellow",
    },
    {
      id: 2,
      title: "In Progress",
      value: "03",
      icon: "bi-graph-up-arrow",
      color: "stat-blue",
    },
    {
      id: 3,
      title: "Planning",
      value: "02",
      icon: "bi-clock-history",
      color: "stat-orange",
    },
    {
      id: 4,
      title: "Completed",
      value: "07",
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
            breadcrumb="Pages / Dashboard"
            title="Main Page"
          />

          <StatsSection data={stats} />
          <ProjectList />
          <BudgetList />
          <UpdateList />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default DashboardPage;