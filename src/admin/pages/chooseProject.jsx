import Header from "./components/Header";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  return (
    <div>
      <ProjectSidebar
        active="back"
        onBackClick={() => console.log("Back to Client Page")}
        onSettingsClick={() => console.log("Settings")}
      />

      <Header />
    </div>
  );
}

export default App;
