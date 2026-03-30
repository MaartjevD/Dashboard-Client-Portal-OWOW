import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ClientWorkspacePage from "./Pages/ClientWorkspacePage";
import SettingsPage from "./Pages/SettingsPage";
import ProjectPage from "./Pages/ProjectPage";
import DashboardHomePage from "./Pages/DashboardHomePage";
import BudgetPage from "./Pages/BudgetPage";
import UpdatesPage from "./Pages/UpdatesPage";
import DocumentsPage from "./Pages/DocumentsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/workspace" element={<ClientWorkspacePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/project-dashboard" element={<DashboardHomePage />} />
      <Route path="/budget" element={<BudgetPage />} />
      <Route path="/updates" element={<UpdatesPage />} />
      <Route path="/documents" element={<DocumentsPage />} />
    </Routes>
  );
}

export default App;