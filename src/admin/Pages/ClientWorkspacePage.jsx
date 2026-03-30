import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ClientsSection from "../components/ClientsSection";

function ClientWorkspacePage() {
  return (
    <div className="workspace-page">
      <Sidebar />

      <div className="workspace-main">
        <Topbar />

        <main className="workspace-content">
          <h1 className="workspace-title">Client Workspace</h1>
          <p className="workspace-subtitle">
            Manage your clients and projects in one place.
          </p>

          <ClientsSection />
        </main>
      </div>
    </div>
  );
}

export default ClientWorkspacePage;