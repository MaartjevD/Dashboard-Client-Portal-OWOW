import { formatDate, sortUpdatesByDate } from "../../utils/projectHelpers";

function UpdateList({ projects = [] }) {
  const latestUpdates = sortUpdatesByDate(
    projects.flatMap((project) =>
      (project.updates || []).map((update) => ({
        ...update,
        projectName: project.name,
      }))
    )
  ).slice(0, 2);

  return (
    <section className="mb-5">
      <h3 className="section-title">Recent Updates</h3>

      <div className="row g-4">
        {latestUpdates.map((item) => (
          <div className="col-12 col-xl-6" key={item.id}>
            <div className="custom-card update-card">
              <div className="update-card-top">
                <h4 className="update-title">{item.title}</h4>
                <span className="update-project-tag">{item.projectName}</span>
              </div>

              <p className="update-description">{item.description}</p>
              <span className="update-time">{formatDate(item.date)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpdateList;
