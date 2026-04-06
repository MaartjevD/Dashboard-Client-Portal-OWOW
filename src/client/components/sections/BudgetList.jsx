import { Link } from "react-router-dom";
import {
  formatCurrency,
  getBudgetUsagePercentage,
  getStatusClass,
} from "../../utils/projectHelpers";

function BudgetList({ projects = [] }) {
  return (
    <section className="mb-5">
      <h3 className="section-title">Budget Overview (Active Projects)</h3>

      <div className="row g-4">
        {projects.map((project) => {
          const usagePercentage = getBudgetUsagePercentage(
            project?.budget?.spent,
            project?.budget?.total
          );

          return (
            <div className="col-12 col-lg-6 col-xl-4" key={project.id}>
              <Link
                to={`/projects/${project.id}?tab=budget`}
                className="budget-card-link"
                aria-label={`Open ${project.name} budget tab`}
              >
                <div className="custom-card budget-card">
                  <div className="project-card-top">
                    <h4 className="project-title">{project.name}</h4>
                    <span className={`status-badge ${getStatusClass(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="budget-content">
                    <div
                      className="budget-circle"
                      aria-label={`Budget usage ${usagePercentage}%`}
                      style={{
                        background: `conic-gradient(#ef7d57 ${usagePercentage}%, #232323 ${usagePercentage}% 100%)`,
                      }}
                    >
                      <div className="budget-circle-inner">
                        <strong>{usagePercentage}%</strong>
                        <span>used</span>
                      </div>
                    </div>

                    <div className="budget-info">
                      <div className="budget-row">
                        <div>
                          <p className="budget-label">Spent</p>
                          <small>Project budget used</small>
                        </div>
                        <span>{formatCurrency(project?.budget?.spent)}</span>
                      </div>

                      <div className="budget-row">
                        <div>
                          <p className="budget-label">Remaining</p>
                          <small>Available budget</small>
                        </div>
                        <span>{formatCurrency(project?.budget?.remaining)}</span>
                      </div>

                      <div className="budget-total">
                        <span>Total Budget</span>
                        <strong>{formatCurrency(project?.budget?.total)}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BudgetList;