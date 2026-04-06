import BudgetSummaryCard from "./BudgetSummaryCard";
import BudgetMonthCard from "./BudgetMonthCard";

function BudgetSection({ budgetData, setBudgetData }) {
  const updateCurrentBudget = (updatedCurrent) => {
    setBudgetData((prev) => ({
      ...prev,
      current: updatedCurrent,
    }));
  };

  const updatePreviousBudget = (id, updatedMonth) => {
    setBudgetData((prev) => ({
      ...prev,
      previous: prev.previous.map((item) =>
        item.id === id ? updatedMonth : item
      ),
    }));
  };

  return (
    <section className="container-fluid px-0">
      <div className="mb-4">
        <BudgetSummaryCard
          data={budgetData.current}
          onSave={updateCurrentBudget}
        />
      </div>

      <div className="row g-4">
        {budgetData.previous.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-xl-4">
            <BudgetMonthCard
              data={item}
              onSave={(updatedMonth) => updatePreviousBudget(item.id, updatedMonth)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BudgetSection;