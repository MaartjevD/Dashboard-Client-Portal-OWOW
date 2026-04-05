import { formatCurrency } from "../../utils/projectHelpers";

function BudgetProgressCard({ budget }) {
  return (
    <section className="mb-4">
      <div className="custom-card budget-progress-card">
        <div className="budget-card-title-row">
          <div className="budget-card-title-left">
            <i className="bi bi-calendar4-event"></i>
            <h3>Monthly Budget Progress</h3>
          </div>
        </div>

        <div className="budget-progress-top">
          <span className="budget-progress-label">Budget Utilization</span>
          <span className="budget-progress-percent">{budget.monthly.utilization}%</span>
        </div>

        <div className="budget-progress-track">
          <div
            className="budget-progress-fill"
            style={{ width: `${budget.monthly.utilization}%` }}
          ></div>
        </div>

        <div className="budget-progress-note">
          You have spent <strong>{formatCurrency(budget.monthly.spent)}</strong> of your{" "}
          <strong>{formatCurrency(budget.monthly.total)}</strong> monthly budget.
          You have <strong>{formatCurrency(budget.monthly.remaining)}</strong> remaining for this month.
        </div>
      </div>
    </section>
  );
}

export default BudgetProgressCard;