import React from "react";
import "../../shared/styles/global.css";

export default function BudgetHistory() {
  return (
    <div className="BudgetBlock">
      <h2 className="HistoryTitel">Budget History (Last 5 Months)</h2>

      <div className="BudgetItem">
        <div className="BudgetHeader">
          <span>November 2025</span>
          <span>€22,400 / €25,000</span>
        </div>
        <div className="ProgressBar">
          <div className="progress" style={{ width: "89%" }}></div>
        </div>
      </div>

      <div className="BudgetItem">
        <div className="BudgetHeader">
          <span>December 2025</span>
          <span>€24,100 / €25,000</span>
        </div>
        <div className="ProgressBar">
          <div className="progress" style={{ width: "96%" }}></div>
        </div>
      </div>

      <div className="BudgetItem">
        <div className="BudgetHeader">
          <span>January 2026</span>
          <span>€23,500 / €25,000</span>
        </div>
        <div className="ProgressBar">
          <div className="progress" style={{ width: "94%" }}></div>
        </div>
      </div>

      <div className="BudgetItem">
        <div className="BudgetHeader">
          <span>February 2026</span>
          <span>€21,200 / €25,000</span>
        </div>
        <div className="ProgressBar">
          <div className="progress" style={{ width: "85%" }}></div>
        </div>
      </div>

      <div className="BudgetItem">
        <div className="BudgetHeader">
          <span>March 2026</span>
          <span>€18,750 / €25,000</span>
        </div>
        <div className="ProgressBar">
          <div className="progress" style={{ width: "75%" }}></div>
        </div>
      </div>
    </div>
  );
}
