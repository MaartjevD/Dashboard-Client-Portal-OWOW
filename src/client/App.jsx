import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import ProjectPage from "./Pages/ProjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/projects/:projectId" element={<ProjectPage />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
