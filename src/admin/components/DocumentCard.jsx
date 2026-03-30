import { useState } from "react";

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

  return (
    <section className="document-card">
      {!isEditing ? (
        <>
          <div className="document-card__top">
            <div className={`document-card__icon document-card__icon--${data.color}`}>
              🔗
            </div>

            <div className="document-card__content">
              <h3 className="document-card__title">{data.title}</h3>
              <p className="document-card__description">{data.description}</p>

              <div className="document-card__meta">
                <span>{data.linkLabel}</span>
                <span className="document-card__dot">•</span>
                <span>—</span>
                <span className="document-card__dot">•</span>
                <span>{data.status}</span>
              </div>
            </div>
          </div>

          <div className="document-card__divider"></div>

          <div className="document-card__bottom">
            <a
              href={data.jiraUrl}
              target="_blank"
              rel="noreferrer"
              className="document-card__jira-btn"
            >
              Open Jira Link
            </a>

            <div className="document-card__actions">
              <button
                className="document-card__action-btn"
                onClick={() => setIsEditing(true)}
              >
                ✏️
              </button>

              <button
                className="document-card__action-btn"
                onClick={onDelete}
              >
                🗑️
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="document-card__edit-form">
          <input
            className="document-card__input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Document title"
          />

          <textarea
            className="document-card__textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Document description"
          />

          <input
            className="document-card__input"
            type="text"
            value={linkLabel}
            onChange={(e) => setLinkLabel(e.target.value)}
            placeholder="Link label"
          />

          <input
            className="document-card__input"
            type="text"
            value={jiraUrl}
            onChange={(e) => setJiraUrl(e.target.value)}
            placeholder="https://..."
          />

          <input
            className="document-card__input"
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Status"
          />

          <div className="inline-edit-actions">
            <button
              className="inline-edit-actions__cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button
              className="inline-edit-actions__save"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default DocumentCard;