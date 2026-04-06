import { useState } from "react";
import { FiLink, FiEdit2, FiTrash2, FiExternalLink } from "react-icons/fi";

function DocumentCard({ data, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [linkLabel, setLinkLabel] = useState(data.linkLabel);
  const [jiraUrl, setJiraUrl] = useState(data.jiraUrl);
  const [status, setStatus] = useState(data.status);

  const handleSave = () => {
    onSave({
      ...data,
      title,
      description,
      linkLabel,
      jiraUrl,
      status,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(data.title);
    setDescription(data.description);
    setLinkLabel(data.linkLabel);
    setJiraUrl(data.jiraUrl);
    setStatus(data.status);
    setIsEditing(false);
  };

  const iconBgClass =
    data.color === "green"
      ? "bg-success-subtle text-success"
      : data.color === "blue"
      ? "bg-primary-subtle text-primary"
      : data.color === "yellow"
      ? "bg-warning-subtle text-warning"
      : data.color === "red"
      ? "bg-danger-subtle text-danger"
      : "bg-secondary-subtle text-secondary";

  const statusBadgeClass =
    status?.toLowerCase() === "active" || status?.toLowerCase() === "open"
      ? "bg-success-subtle text-success"
      : status?.toLowerCase() === "pending"
      ? "bg-warning-subtle text-warning"
      : status?.toLowerCase() === "closed"
      ? "bg-secondary-subtle text-secondary"
      : "bg-light text-dark";

  return (
    <section
      className="card border-0 shadow-sm h-100"
      style={{
        backgroundColor: "#0b0b0b",
        borderRadius: "24px",
      }}
    >
      <div className="card-body p-4 p-lg-5">
        {!isEditing ? (
          <>
            <div className="d-flex align-items-start gap-3 mb-4">
              <div
                className={`d-flex align-items-center justify-content-center rounded-4 ${iconBgClass}`}
                style={{ width: "56px", height: "56px", minWidth: "56px" }}
              >
                <FiLink size={22} />
              </div>

              <div className="flex-grow-1">
                <h3 className="h5 fw-semibold mb-2 text-white">{data.title}</h3>

                <p className="mb-3" style={{ color: "#9ca3af" }}>
                  {data.description}
                </p>

                <div
                  className="d-flex flex-wrap align-items-center gap-2 small"
                  style={{ color: "#9ca3af" }}
                >
                  <span>{data.linkLabel}</span>
                  <span>•</span>
                  <span>Jira</span>
                  <span>•</span>
                  <span className={`badge rounded-pill px-3 py-2 ${statusBadgeClass}`}>
                    {data.status}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="my-3"
              style={{
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
            ></div>

            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <a
                href={data.jiraUrl}
                target="_blank"
                rel="noreferrer"
                className="btn d-inline-flex align-items-center gap-2"
                style={{
                  borderRadius: "14px",
                  padding: "10px 16px",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(126,168,255,0.35)",
                  color: "#7ea8ff",
                }}
              >
                <FiExternalLink size={16} />
                Open Jira Link
              </a>

              <div className="d-flex gap-3">
                <button
                  type="button"
                  className="btn d-flex align-items-center justify-content-center"
                  onClick={() => setIsEditing(true)}
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "16px",
                    backgroundColor: "#121212",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "#f4a261",
                  }}
                >
                  <FiEdit2 size={20} />
                </button>

                <button
                  type="button"
                  className="btn d-flex align-items-center justify-content-center"
                  onClick={onDelete}
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "16px",
                    backgroundColor: "#121212",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "#d1d5db",
                  }}
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="d-flex flex-column gap-3">
            <input
              className="form-control"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Document title"
            />

            <textarea
              className="form-control"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Document description"
            />

            <input
              className="form-control"
              type="text"
              value={linkLabel}
              onChange={(e) => setLinkLabel(e.target.value)}
              placeholder="Link label"
            />

            <input
              className="form-control"
              type="text"
              value={jiraUrl}
              onChange={(e) => setJiraUrl(e.target.value)}
              placeholder="https://..."
            />

            <input
              className="form-control"
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Status"
            />

            <div className="d-flex gap-2 justify-content-end">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
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
    </section>
  );
}

export default DocumentCard;