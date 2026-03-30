import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";
import PageHeader from "../components/layout/PageHeader";
import TabBar from "../components/layout/TabBar";
import Footer from "../components/layout/Footer";
import ChatButton from "../components/common/ChatButton";

import MilestonesCard from "../components/sections/MilestonesCard";
import RecentUpdatesGrid from "../components/sections/RecentUpdatesGrid";

function ProjectUpdatePage() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <TopNavbar />

        <div className="dashboard-content">
          <PageHeader
            breadcrumb="Pages / Dashboard / Projects"
            title="Project Alpha"
            subtitle="Assigned to Micheal Jackson"
            badge="In Progress"
          />

          <TabBar />

          <MilestonesCard />
          <RecentUpdatesGrid />
        </div>

        <ChatButton />
        <Footer />
      </div>
    </div>
  );
}

export default ProjectUpdatePage;