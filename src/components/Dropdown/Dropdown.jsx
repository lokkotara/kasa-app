import "./Dropdown.scss";
import { useState } from "react";
import React from "react";

export default function Dropdown({ content, title }) {
  const [isOpen, toggleOpen] = useState(0);

  function displayTemplate() {
    if (!isOpen) {
      return (
        <div className="dropdownHeading" onClick={() => toggleOpen(1)}>
          <span>{title}</span>
          <i className="fas fa-chevron-down chevron chevron-down"></i>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="dropdownHeading" onClick={() => toggleOpen(0)}>
          <span>{title}</span>
          <i className="fas fa-chevron-up chevron chevron-up"></i>
        </div>
        <p className="dropdownContent">
          {title === "Equipements"
            ? content.map((item) => <li key={item}>{item}</li>)
            : content}
        </p>
      </React.Fragment>
    );
  }

  return <article className="dropdown">{displayTemplate()}</article>;
}
