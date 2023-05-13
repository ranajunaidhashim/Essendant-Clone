import React, { useState } from "react";
import { aboutDropdown} from "./NavItems";
import { Link } from "react-router-dom";
import "./Header.css";
// import { navItems } from "./NavItems";


function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}>
        {aboutDropdown.map((i) => {
          return (
            <li key={i.id}>
              <Link
                to={i.path}
                className={i.cName}
                onClick={() => setDropdown(false)}
              >
                {i.title}
              </Link>
            </li>
          );
        })}

        
        {/* {customerDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })} */}
        {/* {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })} */}
      </ul>
      {/* <ul className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}>
        {customerDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul> */}
    </>
  );
}

export default Dropdown;
