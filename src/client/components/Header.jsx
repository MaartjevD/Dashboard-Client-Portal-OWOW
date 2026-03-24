function Header() {
return (
    <section className="project-header">
    <div className="project-header__top">
        <div className="project-header__breadcrumbs">
        <span>Pages</span>
        <span>/</span>
        <span>Dashboard</span>
        <span>/</span>
        <span>Projects</span>
        </div>

        <span className="project-header__status">In Progress</span>
    </div>

    <div className="project-header__content">
        <h1 className="project-header__title">Project Alpha</h1>
        <p className="project-header__subtitle">Assigned to Micheal Jackson</p>
    </div>

    <div className="project-header__tabs">
        <button className="project-header__tab project-header__tab--active">
        <span className="project-header__tab-icon">◎</span>
        <span>OVERVIEW</span>
        </button>

        <button className="project-header__tab">
        <span className="project-header__tab-icon">▣</span>
        <span>BUDGET</span>
        </button>

        <button className="project-header__tab">
        <span className="project-header__tab-icon">▤</span>
        <span>DOCUMENTS</span>
        </button>

        <button className="project-header__tab">
        <span className="project-header__tab-icon">◫</span>
        <span>UPDATE</span>
        </button>
    </div>
    </section>
);
}

export default Header;