import { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

function UpdateCard({ data, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(data.title);
  const [category, setCategory] = useState(data.category);
  const [date, setDate] = useState(data.date);
  const [time, setTime] = useState(data.time);
  const [text, setText] = useState(data.text);
  const [status, setStatus] = useState(data.status);

  const handleSave = () => {
    onSave({
      ...data,
      title,
      category,
      date,
      time,
      text,
      status,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(data.title);
    setCategory(data.category);
    setDate(data.date);
    setTime(data.time);
    setText(data.text);
    setStatus(data.status);
    setIsEditing(false);
  };

  const statusBadgeClass =
    data.status === "current"
      ? "bg-primary-subtle text-primary"
      : data.status === "done"
      ? "bg-success-subtle text-success"
      : "bg-light text-dark";

  return (
    <section
      className="card border-0 shadow-sm"
      style={{
        backgroundColor: "#0b0b0b",
        borderRadius: "28px",
      }}
    >
      <div className="card-body p-4 p-lg-5">
        <div className="mb-3">
          {!isEditing ? (
            <div className="d-flex justify-content-between align-items-start gap-3">
              <div className="flex-grow-1">
                <h3 className="h3 fw-semibold mb-3 text-white">{data.title}</h3>

                <div className="d-flex flex-wrap align-items-center gap-2 small text-secondary">
                  <span className="badge rounded-pill bg-light text-secondary px-3 py-2">
                    {data.category}
                  </span>
                  <span>•</span>
                  <span>{data.date}</span>
                  <span>•</span>
                  <span>{data.time}</span>
                  <span>•</span>
                  <span className={`badge rounded-pill px-3 py-2 ${statusBadgeClass}`}>
                    {data.status}
                  </span>
                </div>
              </div>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn d-flex align-items-center justify-content-center"
                  onClick={() => setIsEditing(true)}
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "18px",
                    backgroundColor: "#121212",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#f4a261",
                  }}
                >
                  <FiEdit2 size={18} />
                </button>

                <button
                  type="button"
                  className="btn d-flex align-items-center justify-content-center"
                  onClick={onDelete}
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "18px",
                    backgroundColor: "#121212",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#d9d9d9",
                  }}
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-between align-items-end flex-wrap gap-3">
              <div style={{ minWidth: "180px" }}>
                <label className="form-label text-light small fw-semibold">
                  Status
                </label>
                <select
                  className="form-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="empty">Empty</option>
                  <option value="current">Current</option>
                  <option value="done">Done</option>
                </select>
              </div>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>

        {!isEditing ? (
          <p className="text-secondary mb-0 fs-5">{data.text}</p>
        ) : (
          <div className="d-flex flex-column gap-3">
            <input
              className="form-control"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />

            <input
              className="form-control"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
            />

            <div className="row g-3">
              <div className="col-12 col-md-6">
                <input
                  className="form-control"
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Date"
                />
              </div>

              <div className="col-12 col-md-6">
                <input
                  className="form-control"
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="Time"
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="4"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Update text"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default UpdateCard;