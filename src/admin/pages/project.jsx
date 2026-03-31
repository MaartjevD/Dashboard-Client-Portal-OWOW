import Header from "./components/Header";
import Sidebar3 from "./components/sidebar3";

function App() {
  return (
    <div>
      <Sidebar3
        active="settings"
        onBackClick={() => console.log("Back to Client Page")}
        onSettingsClick={() => console.log("Settings")}
      />

      <Header />
    </div>
  );
}

export default App;
