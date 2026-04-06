import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mockProjects from "../../../shared/data/mockProjects";
import logo from "../../../shared/styles/logo.png";

function Sidebar() {
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";
  const isProjectPage = location.pathname.startsWith("/projects");

  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sortedProjects = useMemo(
    () => [...mockProjects].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  useEffect(() => {
    if (window.innerWidth <= 992) {
      setIsMobileMenuOpen(false);
    }
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 992) {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    if (window.innerWidth <= 992) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`mobile-sidebar-toggle ${isMobileMenuOpen ? "is-open" : ""}`}
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open sidebar menu"
        aria-controls="client-sidebar"
        aria-expanded={isMobileMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`sidebar-overlay ${isMobileMenuOpen ? "show" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      ></div>

      <aside
        id="client-sidebar"
        className={`sidebar ${isMobileMenuOpen ? "mobile-open" : ""}`}
        aria-label="Sidebar navigation"
      >
        <div className="sidebar-mobile-header">
          <div className="sidebar-logo">
            <img src={logo} alt="OWOW dashboard logo" className="sidebar-logo-image" />
          </div>

          <button
            type="button"
            className="sidebar-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close sidebar menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="sidebar-desktop-logo sidebar-logo">
          <img src={logo} alt="OWOW dashboard logo" className="sidebar-logo-image" />
        </div>

        <div className="sidebar-divider"></div>

        <nav aria-label="Primary">
          <ul className="sidebar-menu list-unstyled m-0 p-0">
            <li>
              <Link
                to="/dashboard"
                className={`sidebar-item ${isDashboard ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                <span className="sidebar-item-left">
                  <i className="bi bi-grid"></i>
                  <span>Dashboard</span>
                </span>
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setIsProjectsOpen((prev) => !prev)}
                className="sidebar-item sidebar-parent-toggle"
                aria-expanded={isProjectsOpen}
                aria-controls="sidebar-project-list"
              >
                <span className="sidebar-item-left">
                  <i className="bi bi-folder2-open"></i>
                  <span>Projects</span>
                </span>

                <i
                  className={`bi sidebar-chevron ${
                    isProjectsOpen ? "bi-chevron-up" : "bi-chevron-down"
                  }`}
                ></i>
              </button>
            </li>

            <div className={`project-submenu-wrapper ${isProjectsOpen ? "open" : ""}`}>
              <ul id="sidebar-project-list" className="project-submenu list-unstyled">
                {sortedProjects.map((project) => {
                  const isActive = location.pathname === `/projects/${project.id}`;

                  return (
                    <li key={project.id}>
                      <Link
                        to={`/projects/${project.id}?tab=overview`}
                        className={`project-subitem ${isActive ? "active-subitem" : ""}`}
                        onClick={closeMobileMenu}
                      >
                        <i className="bi bi-signpost-split"></i>
                        <span>{project.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>


          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;