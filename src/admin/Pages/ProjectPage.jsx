import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ProjectActions from "../components/ProjectActions";
import ProjectCard from "../components/ProjectCard";

function ProjectPage() {
  return (
    <div className="workspace-page">
      <Sidebar />

      <div className="workspace-main">
        <Topbar />

        <main className="workspace-content">
          <div className="projects-page__top">
            <div>
              <h1 className="workspace-title">Projects</h1>
              <p className="workspace-subtitle">
                Manage and track all your projects
              </p>
            </div>

            <ProjectActions />
          </div>

          <div className="projects-grid">
            <ProjectCard
              title="Website Redesign"
              status="Active"
              progress={65}
              startDate="Jan 15, 2026"
              endDate="Apr 30, 2026"
              updated="2 hours ago"
              team={["ML", "AE", "TS"]}
              
            />

            <ProjectCard
              title="Mobile Banking App"
              status="Active"
              progress={42}
              startDate="Feb 1, 2026"
              endDate="Jun 15, 2026"
              updated="5 hours ago"
              team={["CD", "AE", "MA"]}
              clickable={true}
            />

            <ProjectCard
              title="Brand Strategy"
              status="In Progress"
              progress={15}
              startDate="Mar 1, 2026"
              endDate="May 31, 2026"
              updated="1 day ago"
              team={["CD", "KE", "JA"]}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProjectPage;