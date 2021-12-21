import React from "react";
import "./Menu.css";

function Menu(props) {
  return (
    <div id="flyoutMenu"
    handleMouseDown={props.handleMouseDown}
    className={props.menuVisibility ? "show" : "hide"}
    >
        <h3 onClick={props.handleMouseDown} className="menuCloseBtn">close x</h3>
        <h2><a href="#">Home</a></h2>
        <h2><a href="#">About</a></h2>
        <h2><a href="#">Contact</a></h2>
        <h2><a href="#">Search</a></h2>
    </div>
  );
}

export default Menu;