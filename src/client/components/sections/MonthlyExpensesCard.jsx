import { formatCurrency, getExpensePercentage } from "../../utils/projectHelpers";

function MonthlyExpensesCard({ budget }) {
  const breakdown = budget?.breakdown || [];
  const totalMonthlySpent = budget?.monthly?.spent || 0;

  return (
    <section className="mb-4">
      <div className="custom-card monthly-expenses-card">
        <h3 className="budget-section-title">Monthly Expense Breakdown</h3>

        <div className="expense-list">
          {breakdown.map((item) => {
            const percentage = getExpensePercentage(item.amount, totalMonthlySpent);

            return (
              <div key={item.id} className="expense-item">
                <div className="expense-header">
                  <div className="expense-name">
                    <span className="expense-dot"></span>
                    <span>{item.title}</span>
                  </div>

                  <div className="expense-values">
                    <strong>{formatCurrency(item.amount)}</strong>
                    <small>{percentage}% of monthly spend</small>
                  </div>
                </div>

                <div className="expense-track">
                  <div
                    className={`expense-fill ${item.colorClass}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MonthlyExpensesCard;