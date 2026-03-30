function UpdateTimeline({ updatesData }) {
  return (
    <div className="update-timeline">
      {updatesData.map((item) => (
        <div key={item.id} className="update-timeline__item">
          <div
            className={
              item.status === "done"
                ? "update-timeline__dot update-timeline__dot--done"
                : item.status === "current"
                ? "update-timeline__dot update-timeline__dot--current"
                : "update-timeline__dot"
            }
          >
            {item.status === "done" ? "✓" : ""}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpdateTimeline;