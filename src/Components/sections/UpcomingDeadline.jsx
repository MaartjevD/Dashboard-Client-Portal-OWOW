import React from "react";
import "../../shared/styles/global.css";
import calenderDeadline from "../Pictures/calender.png";

export default function UpcomingDeadline() {
  return (
    <div className="DeadlineBlock">
      <h2 className="DeadlineTitle">Upcoming Deadlines</h2>

      <div className="DeadlineSpacing">
        <div className="DeadlineStrokes">
          <div className="BlockIcon">
            <img src={calenderDeadline} className="CalenderIcon" />
          </div>
          <div className="DeadlineText">
            <p>Deadline 1</p>
            <p className="DueDate">Due: March 25, 2026</p>
          </div>
        </div>

        <div className="DeadlineStrokes">
          <div className="BlockIcon">
            <img src={calenderDeadline} className="CalenderIcon" />
          </div>
          <div className="DeadlineText">
            <p>Deadline 1</p>
            <p className="DueDate">Due: March 25, 2026</p>
          </div>
        </div>

        <div className="DeadlineStrokes">
          <div className="BlockIcon">
            <img src={calenderDeadline} className="CalenderIcon" />
          </div>
          <div className="DeadlineText">
            <p>Deadline 1</p>
            <p className="DueDate">Due: March 25, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
