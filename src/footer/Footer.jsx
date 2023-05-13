import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="dis">
        <div className="fleft">
            <h5>All Content © 2022. Essendant, Inc. All Rights Reserved.</h5>
        </div>
        <div className="fright">
        <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Notes</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">GHS Compliance</a></li>
        </ul>
        <br></br>
        <a href="#">We are an Equal Opportunity Employer M/F/Disabled/Veteran</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
