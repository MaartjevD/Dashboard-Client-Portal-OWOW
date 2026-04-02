import React from "react";
import "../../shared/styles/global.css";
import Link from "../Pictures/Link.png";
import Arrow from "../Pictures/arrow.png";

export default function Links() {
  return (
    <div className="links">
      <h2>Links</h2>

      <div className="LinksBlock">
        <div className="LinksContainer">
          <div className="Card">
            <img src={Link} className="LinkIcon" />
            <div className="Text">
              <h3>Design Phase</h3>
              <p>You can see the design phase</p>
            </div>
            <img src={Arrow} className="ArrowIcon" />
          </div>

          <div className="Card">
            <img src={Link} className="LinkIcon" />
            <div className="Text">
              <h3>Project Plan</h3>
              <p>Project plan will update please recheck it</p>
            </div>
            <img src={Arrow} className="ArrowIcon" />
          </div>

          <div className="Card">
            <img src={Link} className="LinkIcon" />
            <div className="Text">
              <h3>Slack Group</h3>
              <p>We are always online on Slack</p>
            </div>
            <img src={Arrow} className="ArrowIcon" />
          </div>

          <div className="Card">
            <img src={Link} className="LinkIcon" />
            <div className="Text">
              <h3>Git</h3>
              <p>You can be updated with our github</p>
            </div>
            <img src={Arrow} className="ArrowIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
