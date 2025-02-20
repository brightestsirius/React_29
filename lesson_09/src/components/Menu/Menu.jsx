import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const linkStyle = (value) => {
    return value.isActive ? `nav--active` : null;
  };

  const routes = [
    {
      path: `/`,
      title: `Home`,
    },
    {
      path: `/todos`,
      title: `Todos`,
    },
    {
      path: `/admin`,
      title: `Admin`,
    },
  ];

  return (
    <nav>
      <ul>
        {routes.map((item, index) => (
          <li key={index}>
            <NavLink className={linkStyle} to={item.path}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
