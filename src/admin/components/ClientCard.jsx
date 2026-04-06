import { useNavigate } from "react-router-dom";
import { FiEye, FiEdit2, FiSettings } from "react-icons/fi";

function ClientCard({
  name,
  company,
  projects,
  status,
  updated,
  initials,
}) {
  const navigate = useNavigate();

  const isClickable = name === "Sarah Johnson";

  const handleClientClick = () => {
    if (isClickable) {
      navigate("/projects");
    }
  };

  const statusClass =
    status?.toLowerCase() === "active"
      ? "bg-success-subtle text-success"
      : status?.toLowerCase() === "pending"
      ? "bg-warning-subtle text-warning"
      : "bg-secondary-subtle text-secondary";

  return (
    <div
      className="card border-0 shadow-sm h-100"
      style={{
        backgroundColor: "#0b0b0b",
        borderRadius: "24px",
      }}
    >
      <div className="card-body p-4 d-flex flex-column h-100">
        <div className="d-flex align-items-center mb-4">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle fw-semibold me-3"
            style={{
              width: "54px",
              height: "54px",
              minWidth: "54px",
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              color: "#ffffff",
              fontSize: "1rem",
            }}
          >
            {initials}
          </div>

          <div className="flex-grow-1">
            <h5
              className={`mb-1 fw-semibold ${
                isClickable ? "text-white" : "text-white"
              }`}
              onClick={handleClientClick}
              style={{
                cursor: isClickable ? "pointer" : "default",
                transition: "0.2s ease",
              }}
            >
              {name}
            </h5>

            <p className="mb-0 small" style={{ color: "#9ca3af" }}>
              {company}
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <span className={`badge rounded-pill px-3 py-2 ${statusClass}`}>
            {status}
          </span>

          <span className="small" style={{ color: "#9ca3af" }}>
            {projects} projects
          </span>
        </div>

        <div
          className="my-3"
          style={{
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        ></div>

        <div className="d-flex justify-content-between align-items-center mt-auto flex-wrap gap-3">
          <span className="small" style={{ color: "#9ca3af" }}>
            Updated {updated}
          </span>

          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn d-flex align-items-center justify-content-center"
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "16px",
                backgroundColor: "#121212",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#d1d5db",
              }}
            >
              <FiEye size={16} />
            </button>

            <button
              type="button"
              className="btn d-flex align-items-center justify-content-center"
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "16px",
                backgroundColor: "#121212",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#f4a261",
              }}
            >
              <FiEdit2 size={16} />
            </button>

            <button
              type="button"
              className="btn d-flex align-items-center justify-content-center"
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "16px",
                backgroundColor: "#121212",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#d1d5db",
              }}
            >
              <FiSettings size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;