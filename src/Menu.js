import React from "react";
import "./Menu.css";
import closeCross from "./Icons/close-cross.png";

function Menu(props) {
  return (
    <div id="flyoutMenu"
    handleMouseDown={props.handleMouseDown}
    className={props.menuVisibility ? "show" : "hide"}
    >
        <div className="closeMenuBtn" onClick={props.handleMouseDown}>
            <p className="menuCloseBtn">close</p>
            <img src={closeCross} alt="closeCross" className="menuCloseCross"/>
        </div>
        <h2><a href="#">Home</a></h2>
        <h2><a href="#">About</a></h2>
        <h2><a href="#">Contact</a></h2>
        <h2><a href="#">Search</a></h2>
    </div>
  );
}

export default Menu;