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
    <section className="budget-section">
      <BudgetSummaryCard
        data={budgetData.current}
        onSave={updateCurrentBudget}
      />

      <div className="budget-section__grid">
        {budgetData.previous.map((item) => (
          <BudgetMonthCard
            key={item.id}
            data={item}
            onSave={(updatedMonth) => updatePreviousBudget(item.id, updatedMonth)}
          />
        ))}
      </div>
    </section>
  );
}

export default BudgetSection;