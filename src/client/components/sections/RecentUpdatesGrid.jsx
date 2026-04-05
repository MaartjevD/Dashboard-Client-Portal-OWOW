function RecentUpdatesGrid({ updates }) {
  return (
    <section className="mb-4">
      <h3 className="recent-update-title">Recent Update</h3>

      <div className="row g-4">
        {updates.map((item) => (
          <div className="col-12 col-xl-6" key={item.id}>
            <div className="custom-card recent-update-card">
              <div className="recent-update-top">
                <h4 className="recent-update-card-title">{item.title}</h4>

                <div
                  className={`recent-update-icon ${
                    item.kind === "milestone" ? "update-icon-orange" : "update-icon-blue"
                  }`}
                >
                  <i className={`bi ${item.kind === "milestone" ? "bi-arrow-up-right" : "bi-arrow-clockwise"}`}></i>
                </div>
              </div>

              <p className="recent-update-description">{item.description}</p>
              <span className="recent-update-time">{item.timeAgo}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentUpdatesGrid;