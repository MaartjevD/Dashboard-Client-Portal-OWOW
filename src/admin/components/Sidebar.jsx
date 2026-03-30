import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar__logo">OWOW</div>

        <nav className="sidebar__nav">
          <NavLink
            to="/workspace"
            className={({ isActive }) =>
              isActive
                ? "sidebar__item sidebar__item--active"
                : "sidebar__item"
            }
          >
            Client Workspace
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "sidebar__item sidebar__item--active"
                : "sidebar__item"
            }
          >
            Settings
          </NavLink>
        </nav>
      </div>

      <div className="sidebar__profile">
        <div className="sidebar__avatar"></div>
        <div>
          <div className="sidebar__name">Mostafa</div>
          <div className="sidebar__role">Administrator</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;