function DeadlineList() {
  const deadlines = [
    {
      id: 1,
      title: "API Integration",
      due: "Due: March 25, 2026",
    },
    {
      id: 2,
      title: "Mobile App Redesign",
      due: "Due: April 30, 2026",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      due: "Due: May 15, 2026",
    },
  ];

  return (
    <div className="deadline-list">
      {deadlines.map((item) => (
        <div className="deadline-item" key={item.id}>
          <div className="deadline-icon">
            <i className="bi bi-calendar4-event"></i>
          </div>

          <div>
            <h5 className="deadline-title">{item.title}</h5>
            <p className="deadline-date">{item.due}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeadlineList;