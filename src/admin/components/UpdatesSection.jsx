import UpdateCard from "./UpdateCard";

function UpdatesSection({ updatesData, setUpdatesData }) {
  const handleSaveUpdate = (id, updatedItem) => {
    setUpdatesData((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const handleDeleteUpdate = (id) => {
    setUpdatesData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="py-4">
      <div className="container-fluid px-4 px-lg-5">
        <div className="position-relative">
          {/* vertical line */}
          <div
            className="position-absolute top-0 bottom-0"
            style={{
              width: "2px",
              backgroundColor: "#d9d9d9",
              left: "36px",
            }}
          ></div>

          <div className="d-flex flex-column gap-4">
            {updatesData.map((item) => {
              const dotClass =
                item.status === "done"
                  ? "bg-success text-white border-0"
                  : item.status === "current"
                  ? "bg-primary text-white border-0"
                  : "bg-light border text-dark";

              return (
                <div
                  key={item.id}
                  className="d-flex align-items-start"
                  style={{ gap: "32px" }}
                >
                  {/* timeline column */}
                  <div
                    className="d-flex justify-content-center position-relative flex-shrink-0"
                    style={{ width: "72px" }}
                  >
                    <div
                      className={`d-flex align-items-center justify-content-center rounded-circle ${dotClass}`}
                      style={{
                        width: "28px",
                        height: "28px",
                        minWidth: "28px",
                        zIndex: 2,
                        marginTop: "6px",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {item.status === "done" ? "✓" : ""}
                    </div>
                  </div>

                  {/* card column */}
                  <div className="flex-grow-1">
                    <UpdateCard
                      data={item}
                      onSave={(updatedItem) =>
                        handleSaveUpdate(item.id, updatedItem)
                      }
                      onDelete={() => handleDeleteUpdate(item.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdatesSection;