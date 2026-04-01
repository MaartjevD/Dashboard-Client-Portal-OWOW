import Header from "./components/Header";
import Sidebar3 from "./components/sidebar3";
import ProjectCards from "./components/projectCards";

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
        <ProjectCards />
      </div>
    </div>
  );
}

export default App;
