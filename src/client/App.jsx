// import { Routes, Route } from "react-router-dom";
// import DashboardPage from "./Pages/DashboardPage";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<DashboardPage />} />
//     </Routes>
//   );
// }

// export default App;


// import DashboardPage from "./pages/DashboardPage";

// function App() {
//   return <DashboardPage />;
// }

// export default App;

// import ProjectOverviewPage from "./pages/ProjectOverviewPage";

// function App() {
//   return <ProjectOverviewPage />;
// }

// export default App;

// import ProjectBudgetPage from "./pages/ProjectBudgetPage";

// function App() {
//   return <ProjectBudgetPage />;
// }

// export default App;



import { Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import ProjectOverviewPage from "./pages/ProjectOverviewPage";
import ProjectBudgetPage from "./pages/ProjectBudgetPage";
import ProjectDocumentsPage from "./pages/ProjectDocumentsPage";
import ProjectUpdatePage from "./pages/ProjectUpdatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={<DashboardPage />} />

      <Route
        path="/projects/alpha"
        element={<Navigate to="/projects/alpha/overview" replace />}
      />

      <Route path="/projects/alpha/overview" element={<ProjectOverviewPage />} />
      <Route path="/projects/alpha/budget" element={<ProjectBudgetPage />} />
      <Route path="/projects/alpha/documents" element={<ProjectDocumentsPage />} />
      <Route path="/projects/alpha/update" element={<ProjectUpdatePage />} />
    </Routes>
  );
}

export default App;