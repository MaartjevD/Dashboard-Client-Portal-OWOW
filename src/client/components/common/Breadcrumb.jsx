import { Link, useLocation, useParams } from "react-router-dom";
import mockProjects from "../../../shared/data/mockProjects";

function Breadcrumb() {
  const location = useLocation();
  const { projectId } = useParams();

  const isDashboard = location.pathname === "/dashboard";
  const isProject = location.pathname.startsWith("/projects");

  const currentProject = mockProjects.find(
    (p) => String(p.id) === projectId
  );

  return (
    <div className="breadcrumb-wrapper">
      <span className="breadcrumb-item">Pages</span>

      <span className="breadcrumb-separator">&gt;</span>

      {isDashboard ? (
        <span className="breadcrumb-item active">Dashboard</span>
      ) : (
        <Link to="/dashboard" className="breadcrumb-item link">
          Dashboard
        </Link>
      )}

      {isProject && currentProject && (
        <>
          <span className="breadcrumb-separator">&gt;</span>

          <span className="breadcrumb-item active">
            {currentProject.name}
          </span>
        </>
      )}
    </div>
  );
}

export default Breadcrumb;