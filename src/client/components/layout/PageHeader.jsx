// function PageHeader() {
//   return (
//     <div className="page-header-section">
//       <p className="page-breadcrumb">Pages / Dashboard</p>
//       <h1 className="page-title">Main Page</h1>
//     </div>
//   );
// }

// export default PageHeader;
/* ===================== PAGE HEADER ===================== */

function PageHeader({ breadcrumb, title, subtitle, badge }) {
  return (
    <div className="page-header-flex">
      <div>
        <p className="page-breadcrumb">{breadcrumb}</p>
        <h1 className="page-title">{title}</h1>

        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>

      {badge && <span className="page-status-badge">{badge}</span>}
    </div>
  );
}

export default PageHeader;