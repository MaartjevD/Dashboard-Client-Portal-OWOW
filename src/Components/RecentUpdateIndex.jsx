import React from "react";
import "../shared/styles/global.css";

export default function UpdateIndex() {
  return (
    <div className="UpdateBox">
      <h2>Recent Updates</h2>

      <div className="UpdateBlocksContainer">
        <div className="UpdateBlock">
          <h1>Milestone complete</h1>
          <p> Nieuwe projecten toegevoegd.</p>
          <p1>2 hours ago</p1>
          <div className="ProjectUpdate">
            <p> project Alpha </p>
          </div>
        </div>

        <div className="UpdateBlock">
          <h1>Milestone complete</h1>
          <p>Projectplanning is bijgewerkt.</p>
          <p1>2 hours ago</p1>
          <div className="ProjectUpdate">
            <p> project Alpha </p>
          </div>
        </div>
      </div>
    </div>
  );
}
