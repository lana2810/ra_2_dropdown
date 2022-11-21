/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

function DropDownList() {
  const text = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (i) => {
    setActiveIndex(i);
  };
  return (
    <ul data-id="dropdown" className="dropdown">
      {text.map((item, index) => (
        <li
          key={index}
          className={index === activeIndex ? "active" : ""}
          onClick={() => handleClick(index)}
        >
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default DropDownList;
