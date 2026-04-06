import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      className="d-flex flex-column justify-content-between p-3 border-end bg-light"
      style={{ width: "260px", minHeight: "100vh" }}
    >
      <div>
        {/* Logo */}
        <div className="mb-4">
          <h4 className="fw-bold m-0">OWOW</h4>
        </div>

        {/* Navigation */}
        <nav className="nav flex-column gap-1">
          <NavLink
            to="/workspace"
            className={({ isActive }) =>
              `nav-link rounded ${
                isActive
                  ? "bg-primary text-white fw-semibold"
                  : "text-dark"
              }`
            }
          >
            Client Workspace
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `nav-link rounded ${
                isActive
                  ? "bg-primary text-white fw-semibold"
                  : "text-dark"
              }`
            }
          >
            Settings
          </NavLink>
        </nav>
      </div>

      {/* Profile */}
      <div className="d-flex align-items-center gap-3 mt-4">
        <div
          className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
        >
          M
        </div>

        <div>
          <div className="fw-semibold">Mostafa</div>
          <div className="text-muted small">Administrator</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;