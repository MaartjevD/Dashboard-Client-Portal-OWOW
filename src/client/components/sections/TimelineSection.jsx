import { formatDate } from "../../utils/projectHelpers";

function TimelineSection({ project }) {
  const timelineData = [
    { id: 1, label: "Start Date", value: formatDate(project.startDate) },
    { id: 2, label: "Finishing Date", value: formatDate(project.finishDate) },
    { id: 3, label: "Title of Project", value: project.projectTitle },
  ];

  return (
    <div className="row g-4 mb-4">
      {timelineData.map((item) => (
        <div className="col-12 col-md-6 col-xl-4" key={item.id}>
          <div className="custom-card timeline-card">
            <p className="timeline-label">{item.label}</p>
            <h3 className="timeline-value">{item.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimelineSection;