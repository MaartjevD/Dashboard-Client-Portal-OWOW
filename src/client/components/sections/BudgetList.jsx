// /* ===================== BUDGET LIST ===================== */

// function BudgetList() {
//   return (
//     <section className="mb-4">
//       <h3 className="section-title">Budget Overview</h3>

//       <div className="row g-4">
//         <div className="col-xl-4">
//           <div className="custom-card">
//             <h4>Project Alpha</h4>
//             <p>€145,000 / €230,000</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BudgetList;
function BudgetList() {
  const budgets = [
    {
      id: 1,
      name: "Project Alpha",
      status: "In Progress",
      statusClass: "badge-progress",
      spent: "€145,000",
      remaining: "€85,000",
      total: "€230,000",
    },
    {
      id: 2,
      name: "Project Beta",
      status: "Planning",
      statusClass: "badge-planning",
      spent: "€0",
      remaining: "€100,000",
      total: "€100,000",
    },
    {
      id: 3,
      name: "Project Teta",
      status: "In Progress",
      statusClass: "badge-progress",
      spent: "€75,000",
      remaining: "€25,000",
      total: "€100,000",
    },
  ];

  return (
    <section className="mb-5">
      <h3 className="section-title">Budget Overview (Active Projects)</h3>

      <div className="row g-4">
        {budgets.map((item) => (
          <div className="col-12 col-lg-6 col-xl-4" key={item.id}>
            <div className="custom-card budget-card">
              <div className="project-card-top">
                <h4 className="project-title">{item.name}</h4>
                <span className={`status-badge ${item.statusClass}`}>
                  {item.status}
                </span>
              </div>

              <div className="budget-content">
                <div className="budget-circle">
                  <div className="budget-circle-inner"></div>
                </div>

                <div className="budget-info">
                  <div className="budget-row">
                    <div>
                      <p className="budget-label">Spent</p>
                      <small>63% of total</small>
                    </div>
                    <span>{item.spent}</span>
                  </div>

                  <div className="budget-row">
                    <div>
                      <p className="budget-label">Remaining</p>
                      <small>Available budget</small>
                    </div>
                    <span>{item.remaining}</span>
                  </div>

                  <div className="budget-total">
                    <span>Total Budget</span>
                    <strong>{item.total}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BudgetList;