function BudgetHistoryCard({ budget }) {
  return (
    <section className="mb-4">
      <div className="custom-card budget-history-card">
        <h3 className="budget-section-title">Budget History (Last 5 Months)</h3>

        <div className="history-list">
          {budget.history.map((item) => (
            <div key={item.id} className="history-item">
              <div className="history-row-top">
                <span className="history-month">{item.month}</span>
                <span className="history-value">{item.value}</span>
              </div>

              <div className="history-track">
                <div className="history-fill" style={{ width: item.width }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BudgetHistoryCard;