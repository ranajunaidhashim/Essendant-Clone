import React from "react";
import "../AboutUs/About.css";
const About = () => {
  return (
    <>
      <div>
        <div className="Aimg">
          <img src="./images/About.jpeg" alt="" />
        </div>
        <div className="Acentered">
          <h1>The Essendant Story</h1>
        </div>
      </div>
      <div>
        <div className="Atext">
          <h4>
            We power our partners’ success by integrating a vast product
            assortment, a world class fulfillment network and a full suite of
            advanced sales, marketing and digital tools. It’s a seamless
            solution that powers unlimited possibilities for our customers in
            the pursuit of smarter operations, category expansion and business
            growth.
          </h4>
          <h5>
            We connect our customers, a diverse network of resellers,
            distributors, online retailers and national organizations across the
            U.S., with top manufacturers in the market to offer over 2 million
            products in our portfolio.
          </h5>
        </div>
      </div>

      <div className="dispg">
        <div className="align">
          <img src="./images/pic1o.jpg"  alt=""/>
          <h3>Smarter Operations</h3>
          <a href="/#">Find Out How »</a>
        </div>
        <div className="align">
          <img src="./images/pic2o.jpg"  alt=""/>
          <h3>Faster Category Expansion</h3>
          <a href="/#">Discover More »</a>
        </div>
        <div className="align">
          <img src="./images/pic3o.jpg" alt="" />
          <h3>Supported Business Growth</h3>
          <a href="/#">Grow With Us »</a>
        </div>
      </div>



      <div className="Asection">
        <div className="AtextL">
          <h1>Learn More About Us.</h1>
        </div>
        <div className="Adis">
          <div className="Adistribute">
            <img src="./images/distribute.svg"  alt=""/>
            <h3>What do we distribute?</h3>
            <div className="Alist">
              <ul>
                <li><h4>Janitorial & Sanitation Supplies</h4></li>
                <li><h4>Food Service products</h4></li>
                <li><h4>Office Supplies</h4></li>
                <li><h4>Office Furniture</h4></li>
                <li><h4>Print, Imaging & Technology Supplies</h4></li>
                <li><h4>Safety Supplies & Tools</h4></li>
              </ul>
            </div>
          </div>
          <div className="Acustomer">
            <img src="./images/customer.svg" alt=""/>
            <h3>Who are our customers?</h3>
            <div className="Alist">
              <ul>
                <li><h4>Office/Workplace Resellers and Dealers</h4></li>
                <li><h4>Janitorial & Sanitation Distributors</h4></li>
                <li><h4>Office Furniture Dealers</h4></li>
                <li><h4>Technology Suppliers</h4></li>
                <li><h4>Online Retailers</h4></li>
                <li><h4>Omni-Channel Suppliers</h4></li>
                <li><h4>Healthcare and Vertical Suppliers</h4></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="dispg Aa">
      <a href="/#">Leadership<label> »</label></a>
      <a href="/#">History<label> »</label></a>
      <a href="/#">Locations<label> »</label></a>
      </div>
      <hr className="Aline"/>

    </>
  );
};

export default About;
