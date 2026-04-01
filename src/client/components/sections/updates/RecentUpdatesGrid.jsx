function RecentUpdatesGrid() {
  const updates = [
    {
      id: 1,
      title: "Update",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      time: "1 min ago",
      icon: "bi-arrow-clockwise",
      iconClass: "update-icon-blue",
    },
    {
      id: 2,
      title: "Milestone",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      time: "1 hour ago",
      icon: "bi-arrow-up-right",
      iconClass: "update-icon-orange",
    },
    {
      id: 3,
      title: "Milestone",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      time: "2 hours ago",
      icon: "bi-arrow-up-right",
      iconClass: "update-icon-orange",
    },
    {
      id: 4,
      title: "Update",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      time: "13 days ago",
      icon: "bi-arrow-clockwise",
      iconClass: "update-icon-blue",
    },
  ];

  return (
    <section className="mb-4">
      <h3 className="recent-update-title">Recent Update</h3>

      <div className="row g-4">
        {updates.map((item) => (
          <div className="col-12 col-xl-6" key={item.id}>
            <div className="custom-card recent-update-card">
              <div className="recent-update-top">
                <h4 className="recent-update-card-title">{item.title}</h4>

                <div className={`recent-update-icon ${item.iconClass}`}>
                  <i className={`bi ${item.icon}`}></i>
                </div>
              </div>

              <p className="recent-update-description">{item.description}</p>
              <span className="recent-update-time">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentUpdatesGrid;