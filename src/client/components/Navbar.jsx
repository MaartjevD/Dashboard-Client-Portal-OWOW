function Navbar() {
  return (
    <nav className="dashboard-navbar d-flex justify-content-between align-items-center">
      <div className="dashboard-navbar__search d-flex align-items-center">
        <span className="dashboard-navbar__search-icon">⌕</span>
        <input
          type="text"
          placeholder="Search projects, documents, updates..."
          className="dashboard-navbar__search-input"
        />
      </div>

      <div className="dashboard-navbar__right d-flex align-items-center">
        <div className="dashboard-navbar__language d-flex align-items-center">
          <button className="dashboard-navbar__lang-btn dashboard-navbar__lang-btn--active">
            EN
          </button>
          <button className="dashboard-navbar__lang-btn">NL</button>
        </div>

        <button
          className="dashboard-navbar__icon-btn d-flex align-items-center justify-content-center"
          aria-label="Notifications"
          type="button"
        >
          <span className="dashboard-navbar__bell">🔔</span>
          <span className="dashboard-navbar__notification-dot"></span>
        </button>

        <div className="dashboard-navbar__profile d-flex align-items-center">
          <img
            src="https://i.pravatar.cc/80?img=47"
            alt="User avatar"
            className="dashboard-navbar__avatar"
          />
          <span className="dashboard-navbar__user-name">Jennifer Lopez</span>
          <span className="dashboard-navbar__arrow">▾</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;