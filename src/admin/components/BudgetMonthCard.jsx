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
    <section className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="h5 mb-0 fw-semibold">{data.month}</h3>

          {!isEditing ? (
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          ) : (
            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          )}
        </div>

        <div className="d-flex flex-column gap-3">
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-uppercase text-muted small fw-semibold">
              Budget
            </span>

            {!isEditing ? (
              <div className="fw-semibold fs-5">€ {data.budget}</div>
            ) : (
              <input
                className="form-control w-auto"
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <span className="text-uppercase text-muted small fw-semibold">
              Spent
            </span>

            {!isEditing ? (
              <div className="fw-semibold fs-5">€ {data.spent}</div>
            ) : (
              <input
                className="form-control w-auto"
                type="number"
                value={spent}
                onChange={(e) => setSpent(e.target.value)}
              />
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <span className="text-uppercase text-muted small fw-semibold">
              Remaining
            </span>

            <div
              className={`fw-bold fs-5 ${
                remaining >= 0 ? "text-warning" : "text-danger"
              }`}
            >
              € {remaining}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BudgetMonthCard;