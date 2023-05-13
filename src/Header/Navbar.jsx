import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import "./Header.css";
import Dropdown from "./Dropdown";
// import { serviceDropdown, customerDropdown, aboutDropdown } from "./NavItems";

// import Button from "./Button";
import { navItems } from "./NavItems";
import { useSelector } from "react-redux";

//btn
import "./Button.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
// import Product from "../AboutUs/dropmenu/Product";

export const Navbar = () => {
  // const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

// const getdata=useSelector((state)=>state.cartreducer.carts);
// console.log(getdata)

// const products=useSelector((state)=>state.allProduct.products);
// const state = useSelector ((state)=>state.products)
const items = useSelector((state) => state.cart);

  return (
    <>

      <nav className="navbar">
        <Link to="/" className="logo">
          <div>
            <img src="essenlogo.jpg" alt="" />
          </div>
        </Link>
        {/* else if (item.title === "CUSTOMERS") else if (item.title === "SERVICES")  */}
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "ABOUT US") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
              
            }
            
            return (
              <li key={item.id} className={item.cName}>
                <Link className="hline" to={item.path}>
                  {item.title}
                </Link>
              </li>
            );}
          )}
        </ul>
        {/* <Button /> */}
        <Link to="/customer">
        <button className="btncc">BECOME A CUSTOMER</button>
      </Link>
      <Link to="/cart">
        <button className="btncart"><Badge badgeContent={items.length} color="primary"><ShoppingCartIcon/></Badge>
</button>
      </Link>
        
      </nav>
    </>
  );
};

export default Navbar;
