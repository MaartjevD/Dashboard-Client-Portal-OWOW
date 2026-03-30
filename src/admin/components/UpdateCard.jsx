import { useState } from "react";

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

  return (
    <section className="update-card">
      <div className="update-card__head">
        {!isEditing ? (
          <>
            <div>
              <h3 className="update-card__title">{data.title}</h3>

              <div className="update-card__meta">
                <span className="update-card__category">{data.category}</span>
                <span className="update-card__meta-dot">•</span>
                <span>{data.date}</span>
                <span className="update-card__meta-dot">•</span>
                <span>{data.time}</span>
              </div>
            </div>

            <div className="update-card__actions">
              <button
                className="update-card__icon-btn"
                onClick={() => setIsEditing(true)}
              >
                ✏️
              </button>
              <button className="update-card__icon-btn" onClick={onDelete}>
                🗑️
              </button>
            </div>
          </>
        ) : (
          <div className="update-card__edit-top">
            <div className="update-card__status-edit">
              <label>Status</label>
              <select
                className="update-card__input"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="empty">Empty</option>
                <option value="current">Current</option>
                <option value="done">Done</option>
              </select>
            </div>

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
      </div>

      {!isEditing ? (
        <p className="update-card__text">{data.text}</p>
      ) : (
        <div className="update-card__edit-form">
          <input
            className="update-card__input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />

          <input
            className="update-card__input"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />

          <div className="update-card__date-row">
            <input
              className="update-card__input"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date"
            />

            <input
              className="update-card__input"
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Time"
            />
          </div>

          <textarea
            className="update-card__textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Update text"
          />
        </div>
      )}
    </section>
  );
}

export default UpdateCard;