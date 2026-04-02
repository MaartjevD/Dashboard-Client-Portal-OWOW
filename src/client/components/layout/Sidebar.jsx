// // function Sidebar() {
// //   return (
// //     <aside className="sidebar">
// //       <div className="sidebar-logo">OWOW</div>

// //       <div className="sidebar-divider"></div>

// //       <ul className="sidebar-menu list-unstyled m-0 p-0">
// //         <li className="sidebar-item active">
// //           <span className="d-flex align-items-center gap-3">
// //             <i className="bi bi-grid"></i>
// //             <span>Dashboard</span>
// //           </span>
// //         </li>

// //         <li className="sidebar-item">
// //           <span className="d-flex align-items-center gap-3">
// //             <i className="bi bi-folder2-open"></i>
// //             <span>Projects</span>
// //           </span>
// //           <i className="bi bi-chevron-right"></i>
// //         </li>

// //         <li className="sidebar-item">
// //           <span className="d-flex align-items-center gap-3">
// //             <i className="bi bi-bar-chart"></i>
// //             <span>Statistics</span>
// //           </span>
// //         </li>
// //       </ul>
// //     </aside>
// //   );
// // }

// // export default Sidebar;
// /* ===================== SIDEBAR ===================== */

// // function Sidebar({ variant = "dashboard", activeProject }) {
// //   return (
// //     <aside className="sidebar">
// //       <div className="sidebar-logo">OWOW</div>

// //       <div className="sidebar-divider"></div>

// //       <ul className="sidebar-menu list-unstyled m-0 p-0">
// //         {/* Dashboard */}
// //         <li className={`sidebar-item ${variant === "dashboard" ? "active" : ""}`}>
// //           <span className="d-flex align-items-center gap-3">
// //             <i className="bi bi-grid"></i>
// //             <span>Dashboard</span>
// //           </span>
// //         </li>

// //         {/* Projects */}
// //         <li className={`sidebar-item ${variant === "projects" ? "active" : ""}`}>
// //           <span className="d-flex align-items-center gap-3">
// //             <i className="bi bi-folder2-open"></i>
// //             <span>Projects</span>
// //           </span>
// //           <i className="bi bi-chevron-down"></i>
// //         </li>

// //         {/* Sub Projects */}
// //         {variant === "projects" && (
// //           <ul className="project-submenu list-unstyled">
// //             {["Project Alpha", "Project Beta", "Project Teta"].map((p) => (
// //               <li
// //                 key={p}
// //                 className={`project-subitem ${
// //                   activeProject === p ? "active-subitem" : ""
// //                 }`}
// //               >
// //                 <i className="bi bi-signpost-split"></i>
// //                 <span>{p}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         )}

// //         {/* Stats */}
// //         <li className="sidebar-item">
// //           <span className="d-flex align-items-center gap-3">
// //             <i className="bi bi-bar-chart"></i>
// //             <span>Statistics</span>
// //           </span>
// //         </li>
// //       </ul>
// //     </aside>
// //   );
// // }

// // export default Sidebar;


// import { useLocation, useNavigate } from "react-router-dom";

// function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isDashboard = location.pathname === "/dashboard";
//   const isProjectPage = location.pathname.startsWith("/projects");
//   const isAlpha = location.pathname.startsWith("/projects/alpha");

//   return (
//     <aside className="sidebar">
//       <div className="sidebar-logo">OWOW</div>

//       <div className="sidebar-divider"></div>

//       <ul className="sidebar-menu list-unstyled m-0 p-0">
//         <li>
//           <button
//             type="button"
//             onClick={() => navigate("/dashboard")}
//             className={`sidebar-item ${isDashboard ? "active" : ""}`}
//           >
//             <span className="d-flex align-items-center gap-3">
//               <i className="bi bi-grid"></i>
//               <span>Dashboard</span>
//             </span>
//           </button>
//         </li>

//         <li>
//           <button
//             type="button"
//             onClick={() => navigate("/projects/alpha/overview")}
//             className={`sidebar-item ${isProjectPage ? "active" : ""}`}
//           >
//             <span className="d-flex align-items-center gap-3">
//               <i className="bi bi-folder2-open"></i>
//               <span>Projects</span>
//             </span>
//             <i className="bi bi-chevron-down"></i>
//           </button>
//         </li>

//         {isProjectPage && (
//           <ul className="project-submenu list-unstyled">
//             <li>
//               <button
//                 type="button"
//                 onClick={() => navigate("/projects/alpha/overview")}
//                 className={`project-subitem ${isAlpha ? "active-subitem" : ""}`}
//               >
//                 <i className="bi bi-signpost-split"></i>
//                 <span>Project Alpha</span>
//               </button>
//             </li>

//             <li>
//               <button type="button" className="project-subitem">
//                 <i className="bi bi-signpost-split"></i>
//                 <span>Project Beta</span>
//               </button>
//             </li>

//             <li>
//               <button type="button" className="project-subitem">
//                 <i className="bi bi-signpost-split"></i>
//                 <span>Project Teta</span>
//               </button>
//             </li>
//           </ul>
//         )}

//         <li>
//           <button type="button" className="sidebar-item">
//             <span className="d-flex align-items-center gap-3">
//               <i className="bi bi-bar-chart"></i>
//               <span>Statistics</span>
//             </span>
//           </button>
//         </li>
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;
// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isDashboard = location.pathname === "/dashboard";
//   const isProjectPage = location.pathname.startsWith("/projects");
//   const isAlpha = location.pathname.startsWith("/projects/alpha");

//   const [isProjectsOpen, setIsProjectsOpen] = useState(isProjectPage);

//   return (
//     <aside className="sidebar">
//       <div className="sidebar-logo">OWOW</div>

//       <div className="sidebar-divider"></div>

//       <ul className="sidebar-menu list-unstyled m-0 p-0">
//         <li>
//           <button
//             type="button"
//             onClick={() => navigate("/dashboard")}
//             className={`sidebar-item ${isDashboard ? "active" : ""}`}
//           >
//             <span className="d-flex align-items-center gap-3">
//               <i className="bi bi-grid"></i>
//               <span>Dashboard</span>
//             </span>
//           </button>
//         </li>

//         <li>
//           <button
//             type="button"
//             onClick={() => setIsProjectsOpen((prev) => !prev)}
//             className={`sidebar-item ${isProjectPage || isProjectsOpen ? "active" : ""}`}
//           >
//             <span className="d-flex align-items-center gap-3">
//               <i className="bi bi-folder2-open"></i>
//               <span>Projects</span>
//             </span>
//             <i className={`bi ${isProjectsOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
//           </button>
//         </li>

//         {isProjectsOpen && (
//           <ul className="project-submenu list-unstyled">
//             <li>
//               <button
//                 type="button"
//                 onClick={() => navigate("/projects/alpha/overview")}
//                 className={`project-subitem ${isAlpha ? "active-subitem" : ""}`}
//               >
//                 <i className="bi bi-signpost-split"></i>
//                 <span>Project Alpha</span>
//               </button>
//             </li>

//             <li>
//               <button type="button" className="project-subitem">
//                 <i className="bi bi-signpost-split"></i>
//                 <span>Project Beta</span>
//               </button>
//             </li>

//             <li>
//               <button type="button" className="project-subitem">
//                 <i className="bi bi-signpost-split"></i>
//                 <span>Project Teta</span>
//               </button>
//             </li>
//           </ul>
//         )}

//         <li>
//           <button type="button" className="sidebar-item">
//             <span className="d-flex align-items-center gap-3">
//               <i className="bi bi-bar-chart"></i>
//               <span>Statistics</span>
//             </span>
//           </button>
//         </li>
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";
  const isProjectPage = location.pathname.startsWith("/projects");

  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const projects = [
    { id: "alpha", name: "Project Alpha" },
    { id: "beta", name: "Project Beta" },
    { id: "teta", name: "Project Teta" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">OWOW</div>

      <div className="sidebar-divider"></div>

      <ul className="sidebar-menu list-unstyled m-0 p-0">
        <li>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className={`sidebar-item ${isDashboard ? "active" : ""}`}
          >
            <span className="d-flex align-items-center gap-3">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </span>
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => setIsProjectsOpen((prev) => !prev)}
            className={`sidebar-item ${isProjectPage ? "active" : ""}`}
          >
            <span className="d-flex align-items-center gap-3">
              <i className="bi bi-folder2-open"></i>
              <span>Projects</span>
            </span>
            <i className={`bi ${isProjectsOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
          </button>
        </li>

        {isProjectsOpen && (
          <ul className="project-submenu list-unstyled">
            {projects.map((project) => {
              const isActive = location.pathname === `/projects/${project.id}`;

              return (
                <li key={project.id}>
                  <button
                    type="button"
                    onClick={() => navigate(`/projects/${project.id}?tab=overview`)}
                    className={`project-subitem ${isActive ? "active-subitem" : ""}`}
                  >
                    <i className="bi bi-signpost-split"></i>
                    <span>{project.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        <li>
          <button type="button" className="sidebar-item">
            <span className="d-flex align-items-center gap-3">
              <i className="bi bi-bar-chart"></i>
              <span>Statistics</span>
            </span>
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;





