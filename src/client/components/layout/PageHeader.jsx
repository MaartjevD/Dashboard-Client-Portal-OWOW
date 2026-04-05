function PageHeader({ breadcrumb, title, subtitle, badge }) {
  return (
    <div className="page-header-flex">
      <div>
        {breadcrumb && <p className="page-breadcrumb">{breadcrumb}</p>}
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>

      {badge && <span className="page-status-badge">{badge}</span>}
    </div>
  );
}

export default PageHeader;