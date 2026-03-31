import React from "react";
import "../shared/styles/global.css";

export default function UpdateIndex() {
  return (
    <div className="UpdateBox">
      <h2>Recent Updates</h2>

      <div className="UpdateBlocksContainer">
        <div className="UpdateBlock">
          <div className="TopRow">
            <h1>Milestone complete</h1>
            <div className="ProjectUpdate">
              <p> project Alpha </p>
            </div>
          </div>

          <p className="Description">
            {" "}
            A new project has been added. Check it out for more details and get
            started right away!!
          </p>
          <p className="PostTime">2 hours ago</p>
        </div>

        <div className="UpdateBlock">
          <div className="TopRow">
            <h1>Milestone complete</h1>
            <div className="ProjectUpdate">
              <p> project Alpha </p>
            </div>
          </div>

          <p className="Description">
            The project planning has been updated. Review the latest changes to
            stay up to date!
          </p>
          <p className="PostTime">2 hours ago</p>
        </div>
      </div>
    </div>
  );
}
