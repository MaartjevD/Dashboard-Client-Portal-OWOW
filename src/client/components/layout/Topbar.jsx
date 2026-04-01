export default function Topbar({
  title = "Dashboard",
  subtitle = "",
  showSearch = true,
  searchPlaceholder = "Search...",
  actions = null,
}) {
  return (
    <header className="topbar-wrapper border-bottom">
      <div className="container-fluid px-3 px-lg-4 py-3">
        <div className="d-flex flex-column gap-3 flex-lg-row align-items-lg-center justify-content-lg-between">
          <div className="topbar-heading">
            <h1 className="topbar-title mb-1">{title}</h1>
            {subtitle ? <p className="topbar-subtitle mb-0">{subtitle}</p> : null}
          </div>

          <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 gap-lg-3">
            {showSearch && (
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
            )}

            {actions ? <div className="topbar-actions d-flex align-items-center gap-2">{actions}</div> : null}
          </div>
        </div>
      </div>
    </header>
  );
}