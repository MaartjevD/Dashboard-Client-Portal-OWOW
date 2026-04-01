import React, { useMemo, useState } from "react";
import { PencilLine } from "lucide-react";

function SmallBudgetCard({ title, initialBudget, initialSpent }) {
  const [isEditing, setIsEditing] = useState(false);
  const [budget, setBudget] = useState(initialBudget);
  const [spent, setSpent] = useState(initialSpent);

  const remaining = useMemo(() => {
    return budget - spent;
  }, [budget, spent]);

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <article className="budget-summary-card">
      <div className="budget-summary-card__header">
        <h3 className="budget-summary-card__title">{title}</h3>

        <button
          type="button"
          className="budget-summary-card__edit"
          onClick={handleToggleEdit}
        >
          <PencilLine size={16} />
          <span>{isEditing ? "Save" : "Edit"}</span>
        </button>
      </div>

      <div className="budget-summary-card__content">
        <div className="budget-summary-card__column">
          <div className="budget-summary-card__item">
            <p className="budget-summary-card__label">BUDGET</p>

            {isEditing ? (
              <div className="budget-summary-card__input-row">
                <span className="budget-summary-card__currency">€</span>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value) || 0)}
                  className="budget-summary-card__input"
                />
              </div>
            ) : (
              <p className="budget-summary-card__value">€ {budget}</p>
            )}
          </div>

          <div className="budget-summary-card__item">
            <p className="budget-summary-card__label">SPENT</p>

            {isEditing ? (
              <div className="budget-summary-card__input-row">
                <span className="budget-summary-card__currency">€</span>
                <input
                  type="number"
                  value={spent}
                  onChange={(e) => setSpent(Number(e.target.value) || 0)}
                  className="budget-summary-card__input"
                />
              </div>
            ) : (
              <p className="budget-summary-card__value">€ {spent}</p>
            )}
          </div>
        </div>

        <div className="budget-summary-card__column budget-summary-card__column--right">
          <div className="budget-summary-card__item">
            <p className="budget-summary-card__label">REMAINING</p>
            <p
              className={`budget-summary-card__value ${
                remaining < 0
                  ? "budget-summary-card__value--red"
                  : "budget-summary-card__value--yellow"
              }`}
            >
              € {remaining}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function BudgetCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [budget, setBudget] = useState(2500);
  const [spent, setSpent] = useState(940);

  const remaining = useMemo(() => {
    return budget - spent;
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
    <section className="budget-section">
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
            <p
              className={`budget-card__value ${
                remaining < 0
                  ? "budget-card__value--red"
                  : "budget-card__value--green"
              }`}
            >
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

      <div className="budget-section__bottom">
        <SmallBudgetCard
          title="Februari 2026"
          initialBudget={3000}
          initialSpent={2920}
        />

        <SmallBudgetCard
          title="Januari 2026"
          initialBudget={1200}
          initialSpent={1250}
        />
      </div>
    </section>
  );
}

export default BudgetCard;

// import React, { useMemo, useState } from "react";
// import { PencilLine } from "lucide-react";

// function BudgetCard() {
//   const [isEditing, setIsEditing] = useState(false);

//   const [budget, setBudget] = useState(2500);
//   const [spent, setSpent] = useState(940);

//   const remaining = useMemo(() => {
//     return Math.max(budget - spent, 0);
//   }, [budget, spent]);

//   const percentage = useMemo(() => {
//     if (!budget || budget <= 0) return 0;
//     return (spent / budget) * 100;
//   }, [budget, spent]);

//   const handleEditToggle = () => {
//     setIsEditing((prev) => !prev);
//   };

//   const handleBudgetChange = (e) => {
//     const value = Number(e.target.value);
//     setBudget(isNaN(value) ? 0 : value);
//   };

//   const handleSpentChange = (e) => {
//     const value = Number(e.target.value);
//     setSpent(isNaN(value) ? 0 : value);
//   };

//   return (
//     <section className="budget-card">
//       <div className="budget-card__header">
//         <h2 className="budget-card__title">
//           March 2026 <span>(Current)</span>
//         </h2>

//         <button
//           type="button"
//           className="budget-card__edit"
//           onClick={handleEditToggle}
//         >
//           <PencilLine size={20} />
//           <span>{isEditing ? "Save" : "Edit"}</span>
//         </button>
//       </div>

//       <div className="budget-card__grid">
//         <div className="budget-card__item">
//           <p className="budget-card__label">BUDGET</p>

//           <div className="budget-card__input-row">
//             <span className="budget-card__currency">€</span>
//             <input
//               type="number"
//               value={budget}
//               onChange={handleBudgetChange}
//               disabled={!isEditing}
//               className="budget-card__input"
//             />
//           </div>
//         </div>

//         <div className="budget-card__item">
//           <p className="budget-card__label">SPENT</p>

//           <div className="budget-card__input-row">
//             <span className="budget-card__currency">€</span>
//             <input
//               type="number"
//               value={spent}
//               onChange={handleSpentChange}
//               disabled={!isEditing}
//               className="budget-card__input"
//             />
//           </div>
//         </div>

//         <div className="budget-card__item">
//           <p className="budget-card__label">REMAINING</p>
//           <p className="budget-card__value budget-card__value--green">
//             € {remaining}
//           </p>
//         </div>

//         <div className="budget-card__item">
//           <p className="budget-card__label">PERCENTAGE</p>
//           <p className="budget-card__value">
//             {percentage.toFixed(1).replace(".", ",")} %
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BudgetCard;
