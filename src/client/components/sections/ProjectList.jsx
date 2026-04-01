// /* ===================== PROJECT LIST ===================== */

// function ProjectList() {
//   return (
//     <section className="mb-4">
//       <h3 className="section-title">Projects Overview</h3>

//       <div className="row g-4">
//         <div className="col-xl-4">
//           <div className="custom-card">
//             <h4>Project Alpha</h4>
//             <p>In Progress</p>
//           </div>
//         </div>

//         <div className="col-xl-4">
//           <div className="custom-card">
//             <h4>Project Beta</h4>
//             <p>Planning</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProjectList;
import ProgressBar from "../common/ProgressBar";

function ProjectList() {
  const projects = [
    {
      id: 1,
      name: "Project Alpha",
      status: "In Progress",
      statusClass: "badge-progress",
      startDate: "2026-01-15",
      endDate: "2026-04-30",
      progress: 68,
    },
    {
      id: 2,
      name: "Project Beta",
      status: "Planning",
      statusClass: "badge-planning",
      startDate: "2026-01-15",
      endDate: "2026-04-30",
      progress: 25,
    },
    {
      id: 3,
      name: "Project Teta",
      status: "In Progress",
      statusClass: "badge-progress",
      startDate: "2026-01-15",
      endDate: "2026-04-30",
      progress: 95,
    },
  ];

  return (
    <section className="mb-5">
      <h3 className="section-title">Projects Overview (Active Projects)</h3>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-12 col-lg-6 col-xl-4" key={project.id}>
            <div className="custom-card project-card">
              <div className="project-card-top">
                <h4 className="project-title">{project.name}</h4>
                <span className={`status-badge ${project.statusClass}`}>
                  {project.status}
                </span>
              </div>

              <div className="project-dates">
                <div className="date-item">
                  <i className="bi bi-calendar4-event"></i>
                  <span>{project.startDate}</span>
                </div>

                <div className="date-item">
                  <i className="bi bi-calendar4-event text-danger"></i>
                  <span>{project.endDate}</span>
                </div>
              </div>

              <ProgressBar percent={project.progress} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;