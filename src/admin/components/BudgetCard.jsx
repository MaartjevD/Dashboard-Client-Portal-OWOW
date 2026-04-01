import React, { useMemo, useState } from "react";
import { PencilLine } from "lucide-react";

function BudgetCard() {
  const [isEditing, setIsEditing] = useState(false);

  const [budget, setBudget] = useState(2500);
  const [spent, setSpent] = useState(940);

  const remaining = useMemo(() => {
    return Math.max(budget - spent, 0);
  }, [budget, spent]);

  const percentage = useMemo(() => {
    if (!budget || budget <= 0) return 0;
    return (spent / budget) * 100;
  }, [budget, spent]);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleBudgetChange = (e) => {
    const value = Number(e.target.value);
    setBudget(isNaN(value) ? 0 : value);
  };

  const handleSpentChange = (e) => {
    const value = Number(e.target.value);
    setSpent(isNaN(value) ? 0 : value);
  };

  return (
    <section className="budget-card">
      <div className="budget-card__header">
        <h2 className="budget-card__title">
          March 2026 <span>(Current)</span>
        </h2>

        <button
          type="button"
          className="budget-card__edit"
          onClick={handleEditToggle}
        >
          <PencilLine size={20} />
          <span>{isEditing ? "Save" : "Edit"}</span>
        </button>
      </div>

      <div className="budget-card__grid">
        <div className="budget-card__item">
          <p className="budget-card__label">BUDGET</p>

          <div className="budget-card__input-row">
            <span className="budget-card__currency">€</span>
            <input
              type="number"
              value={budget}
              onChange={handleBudgetChange}
              disabled={!isEditing}
              className="budget-card__input"
            />
          </div>
        </div>

        <div className="budget-card__item">
          <p className="budget-card__label">SPENT</p>

          <div className="budget-card__input-row">
            <span className="budget-card__currency">€</span>
            <input
              type="number"
              value={spent}
              onChange={handleSpentChange}
              disabled={!isEditing}
              className="budget-card__input"
            />
          </div>
        </div>

        <div className="budget-card__item">
          <p className="budget-card__label">REMAINING</p>
          <p className="budget-card__value budget-card__value--green">
            € {remaining}
          </p>
        </div>

        <div className="budget-card__item">
          <p className="budget-card__label">PERCENTAGE</p>
          <p className="budget-card__value">
            {percentage.toFixed(1).replace(".", ",")} %
          </p>
        </div>
      </div>
    </section>
  );
}

export default BudgetCard;
