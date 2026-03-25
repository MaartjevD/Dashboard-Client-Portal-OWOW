import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import SlackChatIcon from "../components/SlackChatIcon";

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <Navbar />
        <Header />
        <TabBar />
      </div>

      <SlackChatIcon />
    </div>
  );
}

export default DashboardPage;