import Header from "./components/Header";
import Sidebar3 from "./components/sidebar3";
import BudgetCard from "./components/BudgetCard";

function App() {
  return (
    <div>
      {/* Sidebar links */}
      <Sidebar3
        active="settings"
        onBackClick={() => console.log("Back")}
        onSettingsClick={() => console.log("Settings")}
      />

      {/* Header boven */}
      <Header />

      {/* Main content */}
      <div className="main">
        <BudgetCard />
      </div>
    </div>
  );
}

export default App;
