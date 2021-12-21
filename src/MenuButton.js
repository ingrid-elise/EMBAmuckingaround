import React from "react";
import "./MenuButton.css";

function MenuButton(props) {
  return (
    <div className="">
      <button id="roundButton" onMouseDown={props.handleMouseDown}></button>
    </div>
  );
}

export default MenuButton;
