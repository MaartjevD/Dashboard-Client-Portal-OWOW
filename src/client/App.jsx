import "../shared/styles/global.css";
import Footer from "../Components/layout/Footer.jsx";
import TopNavbar from "../Components/layout/TopNavbar.jsx";
import Blocks from "../Components/sections/4Blocks.jsx";
import UpdateIndex from "../Components/sections/RecentUpdateIndex.jsx";
import UpcomingDeadline from "../Components/sections/UpcomingDeadline.jsx";
import BudgetHistory from "../Components/sections/BudgetHistory.jsx";
import Links from "../Components/sections/Links.jsx";

export default function App() {
  return (
    <div>
      <TopNavbar />
      <Blocks />
      <UpdateIndex />
      <UpcomingDeadline />
      <BudgetHistory />
      <Links />
      <Footer />
    </div>
  );
}
