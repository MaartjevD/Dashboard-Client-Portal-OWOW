import Header from "./components/Header";
import Sidebar3 from "./components/sidebar3";
import BudgetCard from "./components/BudgetCard";
import ProjectHeader from "./components/projectHeader";

function App() {
  return (
    <div>
      <Sidebar3
        active="settings"
        onBackClick={() => console.log("Back")}
        onSettingsClick={() => console.log("Settings")}
      />

      <Header />

      <div className="main">
        <ProjectHeader
          onBackClick={() => navigate("/projects")}
          activeTab="budget"
          onTabChange={(tab) => console.log(tab)}
          project={{
            name: "Mobiele Banking App",
            client: "ACME Corporation",
            status: "Active",
          }}
        />

        <BudgetCard />
      </div>
    </div>
  );
}

export default App;
