import { formatDate } from "../../utils/projectHelpers";

function DeadlineList({ milestones }) {
  return (
    <div className="deadline-list">
      {milestones.map((item) => (
        <div className="deadline-item" key={item.id}>
          <div className="deadline-icon">
            <i className="bi bi-calendar4-event"></i>
          </div>

          <div>
            <h5 className="deadline-title">{item.title}</h5>
            <p className="deadline-date">Due: {formatDate(item.dueDate)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeadlineList;