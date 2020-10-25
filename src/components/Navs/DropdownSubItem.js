import React from "react";
import { Link } from "react-router-dom";

const DropdownSubItem = ({ item }) => (
  <ul className="dropdown-menu animated">
    {item.map((val, i) => (
      <li key={i}>
        <Link to={process.env.PUBLIC_URL +val.link} >{val.title}</Link>
      </li>
    ))}
  </ul>
);

export default DropdownSubItem;
