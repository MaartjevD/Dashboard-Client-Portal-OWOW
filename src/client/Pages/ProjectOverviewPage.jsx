// import Sidebar from "../components/layout/Sidebar";
// import TopNavbar from "../components/layout/TopNavbar";
// import PageHeader from "../components/layout/PageHeader";
// import TabBar from "../components/layout/TabBar";
// import Footer from "../components/layout/Footer";

// import StatsSection from "../components/common/StatsSection";
// import TimelineSection from "../components/sections/TimelineSection";
// import ProgressBar from "../components/common/ProgressBar";
// import InfoCard from "../components/common/InfoCard";
// import DeadlineList from "../components/sections/DeadlineList";
// import ContactCard from "../components/sections/ContactCard";

// function ProjectOverviewPage() {
//   const stats = [
//     { id: 1, title: "Total Projects", value: "12", icon: "bi-folder2-open", color: "stat-yellow" },
//     { id: 2, title: "Active Tasks", value: "48", icon: "bi-ui-checks", color: "stat-blue" },
//     { id: 3, title: "Completed", value: "4", icon: "bi-check", color: "stat-green" },
//     { id: 4, title: "Progress", value: "62%", icon: "bi-graph-up", color: "stat-orange" },
//   ];

//   return (
//     <div className="dashboard-layout">
//       <Sidebar variant="projects" />

//       <div className="dashboard-main">
//         <TopNavbar />

//         <div className="dashboard-content">
//           <PageHeader
//             breadcrumb="Pages / Dashboard / Projects"
//             title="Project Alpha"
//             subtitle="Assigned to Michael Jackson"
//             badge="In Progress"
//           />

//           <TabBar />

//           <TimelineSection />

//           <div className="custom-card mb-4">
//             <ProgressBar percent={95} />
//           </div>

//           <StatsSection data={stats} />

//           <div className="row g-4">
//             <div className="col-xl-6">
//               <InfoCard title="Active Projects Status">
//                 <p>progress list...</p>
//               </InfoCard>
//             </div>

//             <div className="col-xl-6">
//               <InfoCard title="Upcoming Deadlines">
//                 <DeadlineList />
//               </InfoCard>
//             </div>

//             <div className="col-xl-6">
//               <ContactCard />
//             </div>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default ProjectOverviewPage;
import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";
import PageHeader from "../components/layout/PageHeader";
import TabBar from "../components/layout/TabBar";
import Footer from "../components/layout/Footer";

import StatsSection from "../components/common/StatsSection";
import ProgressBar from "../components/common/ProgressBar";
import InfoCard from "../components/common/InfoCard";
import ChatButton from "../components/common/ChatButton";

import TimelineSection from "../components/sections/TimelineSection";
import DeadlineList from "../components/sections/DeadlineList";
import ContactCard from "../components/sections/ContactCard";

function ProjectOverviewPage() {
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
      title: "Active Tasks",
      value: "48",
      icon: "bi-ui-checks-grid",
      color: "stat-blue",
    },
    {
      id: 3,
      title: "Completed",
      value: "4",
      icon: "bi-check-circle",
      color: "stat-green",
    },
    {
      id: 4,
      title: "Overall Progress",
      value: "62%",
      icon: "bi-graph-up-arrow",
      color: "stat-orange",
    },
  ];

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

          <TabBar activeTab="Overview" />

          <TimelineSection />

          <div className="custom-card mb-4">
            <ProgressBar percent={95} />
          </div>

          <StatsSection data={stats} />

          <div className="row g-4">
            <div className="col-12 col-xl-6">
              <InfoCard title="Active Projects Status">
                <div className="status-progress-item">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="status-progress-name">Mobile App Redesign</span>
                    <span className="status-progress-value">65%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: "65%" }}></div>
                  </div>
                </div>

                <div className="status-progress-item">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="status-progress-name">E-commerce Platform</span>
                    <span className="status-progress-value">45%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: "45%" }}></div>
                  </div>
                </div>

                <div className="status-progress-item">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="status-progress-name">API Integration</span>
                    <span className="status-progress-value">80%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: "80%" }}></div>
                  </div>
                </div>

                <div className="status-progress-item">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="status-progress-name">Customer Portal</span>
                    <span className="status-progress-value">15%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: "15%" }}></div>
                  </div>
                </div>
              </InfoCard>
            </div>

            <div className="col-12 col-xl-6">
              <InfoCard title="Upcoming Deadlines">
                <DeadlineList />
              </InfoCard>
            </div>

            <div className="col-12 col-xl-6">
              <ContactCard />
            </div>
          </div>
        </div>
        <ChatButton />

        <Footer />
      </div>
    </div>
  );
}

export default ProjectOverviewPage;