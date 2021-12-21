import React, { useState } from "react";
import "./Header.css";
import MenuButton from "./MenuButton";
import Menu from "./Menu";


function Header() {
  const [checked, setChecked] = useState(false);

  const handleMouseDown = (e) => {
    toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  const toggleMenu = () => {
    setChecked(!checked);
    console.log("checked")
  };

  return (
    <div className="banner-area">
      <MenuButton 
      handleMouseDown={handleMouseDown}
      />
      <Menu 
      handleMouseDown={handleMouseDown}
      menuVisibility={checked}
      />
    </div>
  );
}

export default Header;
