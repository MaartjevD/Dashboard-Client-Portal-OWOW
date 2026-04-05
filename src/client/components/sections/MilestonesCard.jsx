import { formatDate } from "../../utils/projectHelpers";

function MilestonesCard({ milestones = [] }) {
  return (
    <section className="mb-3">
      <div className="custom-card milestones-card">
        <div className="milestones-header">
          <i className="bi bi-arrow-up-right"></i>
          <h3>Upcoming Milestones</h3>
        </div>

        <div className="row g-4">
          {milestones.map((item) => (
            <div className="col-12 col-md-6 col-xl-4" key={item.id}>
              <div className="milestone-small-card">
                <p className="milestone-date">{formatDate(item.dueDate)}</p>
                <h4 className="milestone-title">{item.title}</h4>
                <p className="milestone-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MilestonesCard;
