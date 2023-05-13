import React from "react";
import "../Supplier/Suppliers.css";

const Suppliers = () => {
  return (
    <>
      <div>
        <div className="Aimg">
          <img src="./images/Suppliers.jpeg" alt="" />
        </div>
        <div className="Acentered">
          <h1>Our Suppliers</h1>
        </div>
      </div>
      <div className="Stext">
        <h4>
          Essendant offers an extensive nationwide platform that meets the
          ever-changing needs of a very diverse set of resellers across multiple
          channels and markets.
        </h4>
        <h5>
          Essendant connects hundreds of suppliers with thousands of resellers
          who reach millions of end-user customers. We provide marketing and
          digital tools that drive commerce, and when combined with our deep and
          broad relationships, our partners trust us to roll up our sleeves and
          work side-by-side to go beyond the essentials and to deliver what is
          needed most.
        </h5>
        <h1>Learn More About Being A Supplier.</h1>
      </div>
      <div className="Sbtn">
        <button>PRODUCT SUPPLIER</button>
      </div>

      <div className="Csection">
        <div>
          <div className="Stext">
            <h1>Already A Reseller?</h1>
            <h4>
              Manage your product content online.Visit  <a href="/#">Solutions Central</a>
            </h4>
            <h5>
              If you are a Business & Facility Essentials customer and do not
              have login credentials, e-mail <a href="/#">technicalsupport@essendant.com.</a>
            </h5>
          </div>
        </div>
      </div>

      <hr className="Cline" />
    </>
  );
};

export default Suppliers;
