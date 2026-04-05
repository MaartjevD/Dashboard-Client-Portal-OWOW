function TopNavbar() {
  return (
    <header className="top-navbar">
      <label className="search-box" aria-label="Search">
        <i className="bi bi-search"></i>
        <input
          type="search"
          placeholder="Search projects, documents, and updates..."
          aria-label="Search projects, documents, and updates"
        />
      </label>

      <div className="top-navbar-right">
        <div className="lang-switch" aria-label="Language switch">
          <button type="button" className="lang-btn active" aria-pressed="true">
            EN
          </button>
          <button type="button" className="lang-btn" aria-pressed="false">
            NL
          </button>
        </div>

        <button type="button" className="icon-btn" aria-label="Notifications">
          <i className="bi bi-bell"></i>
          <span className="notif-dot"></span>
        </button>

        <button type="button" className="profile-box" aria-label="Open profile menu">
          <img
            src="https://i.pravatar.cc/40?img=47"
            alt="Jennifer Lopez"
            className="profile-avatar"
          />
          <span className="profile-name">Jennifer Lopez</span>
          <i className="bi bi-chevron-down"></i>
        </button>
      </div>
    </header>
  );
}

export default TopNavbar;