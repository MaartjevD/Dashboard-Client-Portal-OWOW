import Header from "./components/Header";
import ClientSelectSidebar from "./components/ClientSelectSidebar";

function App() {
  return (
    <div>
      <ClientSelectSidebar
        active="workspace"
        onWorkspaceClick={() => console.log("Workspace")}
        onSettingsClick={() => console.log("Settings")}
      />

      <Header />
    </div>
  );
}

export default App;

import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
