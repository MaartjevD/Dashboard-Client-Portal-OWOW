import React from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  EllipsisVertical,
  Users,
} from "lucide-react";
import "../../shared/styles/themeMaartje.css";

function ProjectCards() {
  const projects = [
    {
      id: 1,
      title: "Website Redesign",
      status: "Active",
      progress: 65,
      startDate: "Jan 15, 2026",
      endDate: "Apr 30, 2026",
      members: ["MD", "AE", "TS"],
      updated: "Updated 2 hours ago",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      status: "Active",
      progress: 42,
      startDate: "Feb 1, 2026",
      endDate: "Jun 15, 2026",
      members: ["CD", "AE", "MA"],
      updated: "Updated 5 hours ago",
    },
    {
      id: 3,
      title: "Brand Strategy",
      status: "In Progress",
      progress: 15,
      startDate: "Mar 1, 2026",
      endDate: "May 31, 2026",
      members: ["CD", "KE", "JA"],
      updated: "Updated 1 day ago",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-section__top">
        <div>
          <h2 className="projects-section__title">Projects</h2>
          <p className="projects-section__subtitle">
            Select a client to access their workspace
          </p>
        </div>

        <button type="button" className="projects-section__add-btn">
          <BriefcaseBusiness size={18} />
          <span>Add Project</span>
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className="project-card"
            onClick={() => console.log(`Selected: ${project.title}`)}
          >
            <div className="project-card__header">
              <div>
                <h3 className="project-card__title">{project.title}</h3>
                <span
                  className={`project-card__status ${
                    project.status === "In Progress"
                      ? "project-card__status--blue"
                      : "project-card__status--green"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <EllipsisVertical size={20} className="project-card__menu" />
            </div>

            <div className="project-card__progress-row">
              <span className="project-card__label">Progress</span>
              <span className="project-card__progress-value">
                {project.progress}%
              </span>
            </div>

            <div className="project-card__progress-bar">
              <div
                className="project-card__progress-fill"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            <div className="project-card__dates">
              <div className="project-card__date-item">
                <CalendarDays size={18} />
                <div>
                  <span className="project-card__date-label">Start Date</span>
                  <p>{project.startDate}</p>
                </div>
              </div>

              <div className="project-card__date-item">
                <CalendarDays size={18} />
                <div>
                  <span className="project-card__date-label">End Date</span>
                  <p>{project.endDate}</p>
                </div>
              </div>
            </div>

            <div className="project-card__footer">
              <div className="project-card__members">
                <Users size={18} className="project-card__members-icon" />

                <div className="project-card__avatars">
                  {project.members.map((member) => (
                    <div key={member} className="project-card__avatar">
                      {member}
                    </div>
                  ))}
                </div>
              </div>

              <span className="project-card__updated">{project.updated}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ProjectCards;
