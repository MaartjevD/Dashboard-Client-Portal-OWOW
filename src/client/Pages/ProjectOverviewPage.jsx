import StatsSection from "../components/common/StatsSection";
import ProgressBar from "../components/common/ProgressBar";
import InfoCard from "../components/common/InfoCard";

import TimelineSection from "../components/sections/TimelineSection";
import DeadlineList from "../components/sections/DeadlineList";
import ContactCard from "../components/sections/ContactCard";

function ProjectOverviewPage({ project }) {
  const stats = [
    {
      id: 1,
      title: "Total Tasks",
      value: String(project.tasks.totalProjects),
      icon: "bi-folder2-open",
      color: "stat-yellow",
    },
    {
      id: 2,
      title: "Active Tasks",
      value: String(project.tasks.activeTasks),
      icon: "bi-ui-checks-grid",
      color: "stat-blue",
    },
    {
      id: 3,
      title: "Completed",
      value: String(project.tasks.completed),
      icon: "bi-check-circle",
      color: "stat-green",
    },
    {
      id: 4,
      title: "Overall Progress Total",
      value: `${project.tasks.overallProgress}%`,
      icon: "bi-graph-up-arrow",
      color: "stat-orange",
    },
  ];

  return (
    <>
      <TimelineSection project={project} />

      <div className="custom-card mb-4">
        <ProgressBar percent={project.progress} />
      </div>

      <StatsSection data={stats} />

      <div className="row g-4">
        <div className="col-12 col-xl-6">
          <InfoCard title="Active Projects Status">
            {project.milestones.map((item) => (
              <div className="status-progress-item" key={item.id}>
                <div className="d-flex justify-content-between mb-2">
                  <span className="status-progress-name">{item.title}</span>
                  <span className="status-progress-value">{item.status}</span>
                </div>
              </div>
            ))}
          </InfoCard>
        </div>

        <div className="col-12 col-xl-6">
          <InfoCard title="Upcoming Deadlines">
            <DeadlineList milestones={project.milestones} />
          </InfoCard>
        </div>

        <div className="col-12 col-xl-6">
          <ContactCard contact={project.contact} />
        </div>
      </div>
    </>
  );
}

export default ProjectOverviewPage;