import { useState } from "react";

function BudgetMonthCard({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [budget, setBudget] = useState(data.budget);
  const [spent, setSpent] = useState(data.spent);

  const remaining = Number(budget) - Number(spent);

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

  return (
    <section className="budget-month-card">
      <div className="budget-month-card__head">
        <h3 className="budget-month-card__title">{data.month}</h3>

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

      <div className="budget-month-card__content">
        <div className="budget-month-card__row">
          <span className="budget-stat__label">BUDGET</span>
          {!isEditing ? (
            <div className="budget-month-card__number">€ {data.budget}</div>
          ) : (
            <input
              className="budget-stat__input"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          )}
        </div>

        <div className="budget-month-card__row">
          <span className="budget-stat__label">SPENT</span>
          {!isEditing ? (
            <div className="budget-month-card__number">€ {data.spent}</div>
          ) : (
            <input
              className="budget-stat__input"
              type="number"
              value={spent}
              onChange={(e) => setSpent(e.target.value)}
            />
          )}
        </div>

        <div className="budget-month-card__row">
          <span className="budget-stat__label">REMAINING</span>
          <div
            className={
              remaining >= 0
                ? "budget-month-card__number budget-month-card__number--yellow"
                : "budget-month-card__number budget-month-card__number--red"
            }
          >
            € {remaining}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BudgetMonthCard;