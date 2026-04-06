import { useEffect, useRef, useState } from "react";

function TopNavbar() {
  const [activeLanguage, setActiveLanguage] = useState("EN");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const profileMenuRef = useRef(null);

  const profileImage =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="top-navbar">
      <div className="search-box">
        <i className="bi bi-search"></i>
        <input
          type="text"
          placeholder="Search projects, documents, and updates..."
          aria-label="Search"
        />
      </div>

      <div className="top-navbar-right">
        <div
          className="language-switch"
          role="group"
          aria-label="Language switch"
        >
          <span
            className={`language-switch-slider ${
              activeLanguage === "NL" ? "is-right" : ""
            }`}
          ></span>

          <button
            type="button"
            className={`language-switch-option ${
              activeLanguage === "EN" ? "active" : ""
            }`}
            onClick={() => setActiveLanguage("EN")}
            aria-pressed={activeLanguage === "EN"}
          >
            EN
          </button>

          <button
            type="button"
            className={`language-switch-option ${
              activeLanguage === "NL" ? "active" : ""
            }`}
            onClick={() => setActiveLanguage("NL")}
            aria-pressed={activeLanguage === "NL"}
          >
            NL
          </button>
        </div>

        <button
          type="button"
          className="notification-btn"
          aria-label="Notifications"
        >
          <i className="bi bi-bell"></i>
          <span className="notification-dot"></span>
        </button>

        <div
          className={`profile-menu-wrapper ${
            isProfileMenuOpen ? "menu-open" : ""
          }`}
          ref={profileMenuRef}
        >
          <button
            type="button"
            className="profile-trigger"
            onClick={() => setIsProfileMenuOpen((prev) => !prev)}
            aria-expanded={isProfileMenuOpen}
            aria-haspopup="menu"
            aria-label="Open profile menu"
          >
            <img
              src={profileImage}
              alt="Jennifer Lopez profile"
              className="profile-avatar"
            />

            <span className="profile-name">Jennifer Lopez</span>

            <i
              className={`bi bi-chevron-down profile-chevron ${
                isProfileMenuOpen ? "rotated" : ""
              }`}
            ></i>
          </button>

          <div
            className={`profile-dropdown ${
              isProfileMenuOpen ? "show" : ""
            }`}
            role="menu"
            aria-label="Profile menu"
          >
            <button type="button" className="profile-dropdown-item" role="menuitem">
              <i className="bi bi-gear"></i>
              <span>Account settings</span>
            </button>

            <button type="button" className="profile-dropdown-item" role="menuitem">
              <i className="bi bi-box-arrow-right"></i>
              <span>Log out</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNavbar;