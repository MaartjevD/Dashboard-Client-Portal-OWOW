function BudgetProgressCard() {
  return (
    <section className="mb-4">
      <div className="custom-card budget-progress-card">
        <div className="budget-card-title-row">
          <div className="budget-card-title-left">
            <i className="bi bi-calendar4-event"></i>
            <h3>March 2026 Budget Progress</h3>
          </div>
        </div>

        <div className="budget-progress-top">
          <span className="budget-progress-label">Budget Utilization</span>
          <span className="budget-progress-percent">75.0%</span>
        </div>

        <div className="budget-progress-track">
          <div className="budget-progress-fill"></div>
        </div>

        <div className="budget-progress-note">
          You have spent <strong>€18,750</strong> of your <strong>€25,000</strong> monthly budget.
          You have <strong>€6,250</strong> remaining for this month.
        </div>
      </div>
    </section>
  );
}

export default BudgetProgressCard;