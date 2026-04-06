function Topbar() {
  return (
    <header className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
      
      {/* Search */}
      <div style={{ maxWidth: "300px", width: "100%" }}>
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
        />
      </div>

      {/* Right side */}
      <div className="d-flex align-items-center gap-3">

        <span className="text-muted small">
          EN / NL
        </span>

        {/* Icons */}
        <button className="btn btn-light btn-sm">🔔</button>
        <button className="btn btn-light btn-sm">⚙️</button>

        {/* Avatar */}
        <div
          className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
          style={{ width: "36px", height: "36px", fontSize: "14px" }}
        >
          M
        </div>

      </div>
    </header>
  );
}

export default Topbar;