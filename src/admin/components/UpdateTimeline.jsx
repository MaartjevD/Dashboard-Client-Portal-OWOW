function UpdateTimeline({ updatesData }) {
  return (
    <div className="d-flex flex-column align-items-center position-relative h-100">

      {/* Vertical line */}
      <div
        className="position-absolute top-0 bottom-0"
        style={{
          width: "2px",
          backgroundColor: "#dee2e6",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      ></div>

      {/* Dots */}
      <div className="d-flex flex-column align-items-center gap-4">
        {updatesData.map((item) => {
          const dotClass =
            item.status === "done"
              ? "bg-success text-white"
              : item.status === "current"
              ? "bg-primary text-white"
              : "bg-light border";

          return (
            <div
              key={item.id}
              className={`d-flex align-items-center justify-content-center rounded-circle ${dotClass}`}
              style={{
                width: "28px",
                height: "28px",
                zIndex: 1,
              }}
            >
              {item.status === "done" ? "✓" : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UpdateTimeline;