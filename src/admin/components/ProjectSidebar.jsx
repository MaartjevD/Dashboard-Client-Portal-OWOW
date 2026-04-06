import { useNavigate } from "react-router-dom";

function ProjectSidebar() {
  const navigate = useNavigate();

  return (
    <aside
      className="d-flex flex-column p-3 border-end bg-light"
      style={{ width: "260px", minHeight: "100vh" }}
    >
      {/* Logo */}
      <div className="mb-4">
        <h4 className="fw-bold m-0">OWOW</h4>
      </div>

      {/* Back */}
      <button
        className="btn btn-link text-start p-0 mb-4"
        onClick={() => navigate("/workspace")}
      >
        ← Back to Client Page
      </button>

      {/* Current Project */}
      <div className="p-3 rounded-3 bg-white shadow-sm">
        <div className="text-muted small mb-1">
          Current Project
        </div>

        <div className="fw-semibold">
          Mobile Banking App
        </div>
      </div>

    </aside>
  );
}

export default ProjectSidebar;