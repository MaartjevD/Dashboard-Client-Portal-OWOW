function BudgetStatsRow() {
  const stats = [
    {
      id: 1,
      icon: "bi-currency-euro",
      label: "Monthly Budget",
      value: "€25,000",
    },
    {
      id: 2,
      icon: "bi-graph-down-arrow",
      label: "Monthly Expenses",
      value: "€18,750",
    },
    {
      id: 3,
      icon: "bi-arrow-up-right",
      label: "Remaining Balance",
      value: "€6,250",
    },
  ];

  return (
    <div className="row g-4 mb-4">
      {stats.map((item) => (
        <div className="col-12 col-md-6 col-xl-4" key={item.id}>
          <div className="custom-card budget-stat-card">
            <div className="budget-stat-icon">
              <i className={`bi ${item.icon}`}></i>
            </div>

            <div className="budget-stat-content">
              <p className="budget-stat-label">{item.label}</p>
              <h3 className="budget-stat-value">{item.value}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BudgetStatsRow;