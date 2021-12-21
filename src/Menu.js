import React from "react";
import "./Menu.css";

function Menu(props) {
    // var visibility = "hide";

    // if (props.menuVisibililty) {
    //     visibility = "show";
    // }
    
  return (
    <div id="flyoutMenu"
    handleMouseDown={props.handleMouseDown}
    // className={visibility}
    className={props.menuVisibility ? "show" : "hide"}
    >
        <h2><a href="#">Home</a></h2>
        <h2><a href="#">About</a></h2>
        <h2><a href="#">Contact</a></h2>
        <h2><a href="#">Search</a></h2>
    </div>
  );
}

export default Menu;