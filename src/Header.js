import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    let checked = event.target.checked;
    setChecked(!checked);
  };

  return (
    <div className="banner-area">
      <label for="nav" className="nav-btn">
        <span>
          <i className="nav-three-bars">nav bars</i>
          <input type="checkbox" />
        </span>
      </label>
      <input type="checkbox" checked={checked} onChange={handleChange} id="" />
      <div className="nav-overlay">
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Home</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
