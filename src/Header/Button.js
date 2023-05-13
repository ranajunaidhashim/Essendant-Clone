import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";

function Button() {

const getdata=useSelector((state)=>state.cartreducer.carts );

  return (
    <>
      <Link to="/customer">
        <button className="btncc">BECOME A CUSTOMER</button>
      </Link>
      <Link to="/cart">
        <button className="btncart"><Badge badgeContent={getdata.length} color="primary"><ShoppingCartIcon/></Badge>
</button>
      </Link>
    </>
  );
}

export default Button;
