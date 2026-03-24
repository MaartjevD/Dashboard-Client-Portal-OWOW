function Navbar() {
return (
    <header className="dashboard-navbar">
    <div className="dashboard-navbar__search">
        <span className="dashboard-navbar__search-icon">⌕</span>
        <input
        type="text"
        placeholder="Search projects, documents, updates..."
        className="dashboard-navbar__search-input"
        />
    </div>

    <div className="dashboard-navbar__right">
        <div className="dashboard-navbar__language">
        <button className="dashboard-navbar__lang-btn dashboard-navbar__lang-btn--active">
            EN
        </button>
        <button className="dashboard-navbar__lang-btn">NL</button>
        </div>

        <button className="dashboard-navbar__icon-btn" aria-label="Notifications">
        <span className="dashboard-navbar__bell">🔔</span>
        </button>

        <div className="dashboard-navbar__profile">
        <img
            src="https://i.pravatar.cc/80?img=12"
            alt="User"
            className="dashboard-navbar__avatar"
        />
        <span className="dashboard-navbar__user-name">Jennifer Lopez</span>
        <span className="dashboard-navbar__arrow">▾</span>
        </div>
    </div>
    </header>
);
}

export default Navbar;