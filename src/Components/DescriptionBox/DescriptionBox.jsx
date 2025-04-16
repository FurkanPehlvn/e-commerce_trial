import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(150)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Static text</p>
        <p>more text</p>
      </div>
    </div>
  );
}

export default DescriptionBox;
