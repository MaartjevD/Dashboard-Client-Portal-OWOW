export default function Topbar({
  title = "Dashboard",
  subtitle = "",
  showSearch = true,
  searchPlaceholder = "Search projects, documents, updates...",
  actions = null,
}) {
  return (
    <header className="topbar-wrapper">
      <div className="container-fluid px-3 px-lg-4 h-100">
        <div className="topbar-row d-flex align-items-center justify-content-between gap-3 h-100">
          <div className="topbar-search-wrap flex-grow-1">
            {showSearch ? (
              <div className="topbar-search input-group">
                <span className="input-group-text topbar-search-icon">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control topbar-search-input"
                  placeholder={searchPlaceholder}
                />
              </div>
            ) : (
              <div>
                <h1 className="topbar-title mb-1">{title}</h1>
                {subtitle ? <p className="topbar-subtitle mb-0">{subtitle}</p> : null}
              </div>
            )}
          </div>

          <div className="topbar-actions d-flex align-items-center gap-3 flex-shrink-0">
            <div className="language-switcher d-flex align-items-center">
              <button type="button" className="lang-btn active">EN</button>
              <button type="button" className="lang-btn">NL</button>
            </div>

            <button type="button" className="topbar-icon-btn position-relative">
              <i className="bi bi-bell"></i>
              <span className="notification-dot"></span>
            </button>

            <div className="user-menu d-flex align-items-center gap-2">
              <div className="user-avatar d-inline-flex align-items-center justify-content-center">
                JL
              </div>
              <div className="user-meta d-none d-md-block">
                <div className="user-name">Jennifer Lopez</div>
              </div>
              <i className="bi bi-chevron-down user-chevron"></i>
            </div>

            {actions}
          </div>
        </div>
      </div>
    </header>
  );
}