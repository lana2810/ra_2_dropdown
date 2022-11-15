import React from "react";

function DropDown({ onToggle }) {
  return (
    <button data-id="toggle" className="btn" onClick={onToggle}>
      <span>Account Settings</span>
      <i className="material-icons">public</i>
    </button>
  );
}

export default DropDown;
