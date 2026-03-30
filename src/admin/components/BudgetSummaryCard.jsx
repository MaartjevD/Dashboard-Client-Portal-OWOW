import { useState } from "react";

function BudgetSummaryCard({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [budget, setBudget] = useState(data.budget);
  const [spent, setSpent] = useState(data.spent);

  const remaining = budget - spent;
  const percentage = budget > 0 ? ((spent / budget) * 100).toFixed(1) : 0;

  const handleSave = () => {
    onSave({
      ...data,
      budget: Number(budget),
      spent: Number(spent),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setBudget(data.budget);
    setSpent(data.spent);
    setIsEditing(false);
  };

  const currentRemaining = Number(budget) - Number(spent);
  const currentPercentage =
    Number(budget) > 0
      ? ((Number(spent) / Number(budget)) * 100).toFixed(1)
      : 0;

  return (
    <section className="budget-summary-card">
      <div className="budget-summary-card__head">
        <div>
          <h2 className="budget-summary-card__title">
            {data.month} <span className="budget-summary-card__current">(Current)</span>
          </h2>
        </div>

        {!isEditing ? (
          <button
            className="budget-card__edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        ) : (
          <div className="inline-edit-actions">
            <button
              className="inline-edit-actions__cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="inline-edit-actions__save"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        )}
      </div>

      <div className="budget-summary-card__stats">
        <div className="budget-stat">
          <span className="budget-stat__label">BUDGET</span>
          {!isEditing ? (
            <div className="budget-stat__inputlike">€ {data.budget}</div>
          ) : (
            <input
              className="budget-stat__input"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          )}
        </div>

        <div className="budget-stat">
          <span className="budget-stat__label">SPENT</span>
          {!isEditing ? (
            <div className="budget-stat__inputlike">€ {data.spent}</div>
          ) : (
            <input
              className="budget-stat__input"
              type="number"
              value={spent}
              onChange={(e) => setSpent(e.target.value)}
            />
          )}
        </div>

        <div className="budget-stat">
          <span className="budget-stat__label">REMAINING</span>
          <div className="budget-stat__value budget-stat__value--green">
            € {currentRemaining}
          </div>
        </div>

        <div className="budget-stat">
          <span className="budget-stat__label">PERCENTAGE</span>
          <div className="budget-stat__value">{currentPercentage} %</div>
        </div>
      </div>
    </section>
  );
}

export default BudgetSummaryCard;