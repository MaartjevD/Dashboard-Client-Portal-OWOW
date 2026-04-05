import { formatCurrency } from "../../utils/projectHelpers";

function MonthlyExpensesCard({ budget }) {
  return (
    <section className="mb-4">
      <div className="custom-card monthly-expenses-card">
        <h3 className="budget-section-title">Monthly Expense Breakdown</h3>

        <div className="expense-list">
          {budget.breakdown.map((item) => (
            <div key={item.id} className="expense-item">
              <div className="expense-header">
                <div className="expense-name">
                  <span className="expense-dot"></span>
                  <span>{item.title}</span>
                </div>

                <div className="expense-values">
                  <strong>{formatCurrency(item.amount)}</strong>
                  <small>{item.percentText}</small>
                </div>
              </div>

              <div className="expense-track">
                <div
                  className={`expense-fill ${item.colorClass}`}
                  style={{ width: item.width }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MonthlyExpensesCard;