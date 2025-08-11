import React from "react";
import "./headerart.css";

const HeaderArtBase = (props) => {
  const growToParent = { width: "100%", height: "100%" };

  return (
    <div style={{ ...growToParent }}>
      <div className="header-art-base">
        <img src={`images/${props.image}.png`} alt="graphic for the header" />
      </div>
    </div>
  );
};

export default HeaderArtBase;
