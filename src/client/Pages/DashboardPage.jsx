import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SlackChatIcon from "../components/SlackChatIcon";

function DashboardPage() {
return (
    <div className="dashboard-page">
    <Navbar />
    <Header />
    <SlackChatIcon />
    </div>
);
}

export default DashboardPage;