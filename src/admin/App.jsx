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

// import Header from "./components/Header";
// import Sidebar3 from "./components/sidebar3";
// import BudgetCard from "./components/BudgetCard";

// function App() {
//   return (
//     <div>
//       {/* Sidebar links */}
//       <Sidebar3
//         active="settings"
//         onBackClick={() => console.log("Back")}
//         onSettingsClick={() => console.log("Settings")}
//       />

//       {/* Header boven */}
//       <Header />

//       {/* Main content */}
//       <div className="main">
//         <BudgetCard />
//       </div>
//     </div>
//   );
// }

// export default App;

// import Header from "./components/Header";
// import Sidebar3 from "./components/sidebar3";

// function App() {
//   return (
//     <div>
//       <Sidebar3
//         active="settings"
//         onBackClick={() => console.log("Back to Client Page")}
//         onSettingsClick={() => console.log("Settings")}
//       />

//       <Header />
//     </div>
//   );
// }

// export default App;

// import Header from "./components/Header";
// import ProjectSidebar from "./components/sidebar2";

// function App() {
//   return (
//     <div>
//       <ProjectSidebar
//         active="back"
//         onBackClick={() => console.log("Back to Client Page")}
//         onSettingsClick={() => console.log("Settings")}
//       />

//       <Header />
//     </div>
//   );
// }

// export default App;

// import Header from "./components/Header";
// import ClientSelectSidebar from "./components/ClientSelectSidebar";

// function App() {
//   return (
//     <div>
//       <ClientSelectSidebar
//         active="workspace"
//         onWorkspaceClick={() => console.log("Workspace")}
//         onSettingsClick={() => console.log("Settings")}
//       />

//       <Header />
//     </div>
//   );
// }

// export default App;

//import Header from "./components/Header";

//function App() {
//return (
//<div>
//<Header />
// </div>
// );
//}
