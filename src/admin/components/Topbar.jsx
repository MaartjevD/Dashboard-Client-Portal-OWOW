function Topbar() {
  return (
    <header className="topbar">
      <input
        type="text"
        placeholder="Search..."
        className="topbar__search"
      />

      <div className="topbar__right">
        <div className="topbar__lang">EN / NL</div>
        <div className="topbar__icon"></div>
        <div className="topbar__icon"></div>
        <div className="topbar__avatar"></div>
      </div>
    </header>
  );
}

export default Topbar;