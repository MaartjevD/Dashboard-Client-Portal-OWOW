function BudgetHistoryCard() {
  const history = [
    {
      id: 1,
      month: "November 2025",
      value: "€22,400 / €25,000",
      width: "93%",
    },
    {
      id: 2,
      month: "December 2025",
      value: "€24,100 / €25,000",
      width: "98%",
    },
    {
      id: 3,
      month: "January 2026",
      value: "€23,500 / €25,000",
      width: "96%",
    },
    {
      id: 4,
      month: "February 2026",
      value: "€21,200 / €25,000",
      width: "89%",
    },
    {
      id: 5,
      month: "March 2026",
      value: "€18,750 / €25,000",
      width: "81%",
    },
  ];

  return (
    <section className="mb-4">
      <div className="custom-card budget-history-card">
        <h3 className="budget-section-title">Budget History (Last 5 Months)</h3>

        <div className="history-list">
          {history.map((item) => (
            <div key={item.id} className="history-item">
              <div className="history-row-top">
                <span className="history-month">{item.month}</span>
                <span className="history-value">{item.value}</span>
              </div>

              <div className="history-track">
                <div
                  className="history-fill"
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

export default BudgetHistoryCard;