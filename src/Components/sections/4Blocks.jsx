import React from "react";
import "../../shared/styles/global.css";
import folders from "../Pictures/folder.png";
import arrow from "../Pictures/Progress.png";
import time from "../Pictures/time.png";
import checked from "../Pictures/checked.png";

export default function Blocks() {
  return (
    <div className="FourBlocks">
      <div className="Block Projects">
        <img src={folders} className="FolderIcon" />
        <p>Total Projects</p>
        <h2>12</h2>
      </div>

      <div className="Block Progress">
        <img src={arrow} className="ProgressIcon" />
        <p>In progress</p>
        <h2>03</h2>
      </div>

      <div className="Block Planning">
        <img src={time} className="TimeIcon" />
        <p>Planning</p>
        <h2>02</h2>
      </div>

      <div className="Block Completed">
        <img src={checked} className="CheckedIcon" />
        <p>Completed</p>
        <h2>07</h2>
      </div>
    </div>
  );
}
