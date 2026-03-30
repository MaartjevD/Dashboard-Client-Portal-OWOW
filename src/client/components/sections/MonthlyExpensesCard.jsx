function MonthlyExpensesCard() {
  const expenses = [
    {
      id: 1,
      title: "Design & UX",
      amount: "€5,200",
      percentText: "27% of total",
      width: "45%",
      colorClass: "expense-fill-yellow",
    },
    {
      id: 2,
      title: "Development",
      amount: "€8,500",
      percentText: "45.3% of total",
      width: "82%",
      colorClass: "expense-fill-orange",
    },
    {
      id: 3,
      title: "Project Management",
      amount: "€3,200",
      percentText: "17.1% of total",
      width: "37%",
      colorClass: "expense-fill-green",
    },
    {
      id: 4,
      title: "Testing & QA",
      amount: "€1,850",
      percentText: "9.9% of total",
      width: "31%",
      colorClass: "expense-fill-green",
    },
  ];

  return (
    <section className="mb-4">
      <div className="custom-card monthly-expenses-card">
        <h3 className="budget-section-title">Monthly Expense Breakdown</h3>

        <div className="expense-list">
          {expenses.map((item) => (
            <div key={item.id} className="expense-item">
              <div className="expense-header">
                <div className="expense-name">
                  <span className="expense-dot"></span>
                  <span>{item.title}</span>
                </div>

                <div className="expense-values">
                  <strong>{item.amount}</strong>
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