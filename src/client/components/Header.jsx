function Header() {
  return (
    <section className="project-header">
      <div className="project-header__breadcrumbs d-flex align-items-center">
        <span>Pages</span>
        <span>/</span>
        <span>Dashboard</span>
        <span>/</span>
        <span>Projects</span>
      </div>

      <div className="project-header__heading d-flex justify-content-between align-items-end">
        <div>
          <h1 className="project-header__title">Project Alpha</h1>
          <p className="project-header__subtitle">Assigned to Micheal Jackson</p>
        </div>

        <span className="project-header__status">In Progress</span>
      </div>
    </section>
  );
}

export default Header;