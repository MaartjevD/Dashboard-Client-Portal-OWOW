function TimelineSection() {
  const timelineData = [
    {
      id: 1,
      label: "Start Date",
      value: "1 JANUARY 2026",
    },
    {
      id: 2,
      label: "Finishing Date",
      value: "1 FEBRUARY 2026",
    },
    {
      id: 3,
      label: "Title of Project",
      value: "DESIGN & DEVELOPMENT",
    },
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