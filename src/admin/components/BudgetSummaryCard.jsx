import { useState } from "react";

function BudgetSummaryCard({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [budget, setBudget] = useState(data.budget);
  const [spent, setSpent] = useState(data.spent);

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
    <section className="card border-0 shadow-sm">
      <div className="card-body p-4">
        
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="h5 fw-semibold mb-0">
              {data.month}{" "}
              <span className="text-muted small">(Current)</span>
            </h2>
          </div>

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

        {/* Stats */}
        <div className="row g-4">
          
          {/* Budget */}
          <div className="col-12 col-md-6 col-xl-3">
            <div className="d-flex flex-column">
              <span className="text-uppercase text-muted small fw-semibold mb-1">
                Budget
              </span>

              {!isEditing ? (
                <div className="fw-semibold fs-5">€ {data.budget}</div>
              ) : (
                <input
                  className="form-control"
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              )}
            </div>
          </div>

          {/* Spent */}
          <div className="col-12 col-md-6 col-xl-3">
            <div className="d-flex flex-column">
              <span className="text-uppercase text-muted small fw-semibold mb-1">
                Spent
              </span>

              {!isEditing ? (
                <div className="fw-semibold fs-5">€ {data.spent}</div>
              ) : (
                <input
                  className="form-control"
                  type="number"
                  value={spent}
                  onChange={(e) => setSpent(e.target.value)}
                />
              )}
            </div>
          </div>

          {/* Remaining */}
          <div className="col-12 col-md-6 col-xl-3">
            <div className="d-flex flex-column">
              <span className="text-uppercase text-muted small fw-semibold mb-1">
                Remaining
              </span>

              <div className="fw-bold fs-5 text-success">
                € {currentRemaining}
              </div>
            </div>
          </div>

          {/* Percentage */}
          <div className="col-12 col-md-6 col-xl-3">
            <div className="d-flex flex-column">
              <span className="text-uppercase text-muted small fw-semibold mb-1">
                Percentage
              </span>

              <div className="fw-semibold fs-5">
                {currentPercentage} %
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BudgetSummaryCard;