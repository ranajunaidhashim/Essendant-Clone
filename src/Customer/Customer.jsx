import React from "react";
import "../Customer/Customer.css";
const Customer = () => {
  return (
    <>
      <div>
        <div className="Aimg">
          <img src="./images/Customer.jpeg" alt="" />
        </div>
        <div className="Acentered">
          <h1>Our Customers</h1>
        </div>
      </div>
      <div>
        <div className="Atext">
          <h4>
            We power possibilities for resellers by connecting our customers
            with
            <b>
              a vast product assortment from top manufacturers, a world-class
              fulfillment network and a full suite of advanced sales, marketing
              and digital tools.
            </b>
            Learn more about our services or click below and complete the
            application form to inquire about becoming a reseller.
          </h4>
        </div>
        <div className="Ctextl">
          <h1>Become A Customer Application</h1>
        </div>
        <div className="Cp">
          <h4>
            To ensure that you meet the requirements to open an account with
            Essendant, please review and complete the Qualification Criteria
            section of the application below. This section must be completed in
            its entirety in order to proceed. If you are able to meet all of the
            Qualification Criteria, please continue on to carefully complete the
            Customer Information section and submit the application for review.
          </h4>
          <br></br>
          <h4>
            Upon submission of the application, a member of Essendant's Account
            Express team will contact you within five business days to inform
            you of your application status.
          </h4>
        </div>
      </div>
      <div className="Cinput">
        <h5>
          Essendant only sells to resellers, not direct to consumers. To verify
          you are a reseller, you must be able to provide a valid tax resale
          certificate. Please enter any state(s) for which you have a valid tax
          resale certificate.
        </h5>
        <input className="Cin" type="input" />
        <h5>
          Essendant requires that all customers purchase a minimum of $60,000
          from Essendant annually in order to maintain an open account. Confirm
          you can commit to meet the minimum purchase threshold. Note: Accounts
          that do not meet a minimum threshold of $5,000 a month will be closed
          within six months.*
        </h5>
        <div>
          <input className="Cradio" type="radio"></input>
          <label className="CR">
            <b>I commit to meet the minimum purchase threshold.</b>
          </label>
        </div>
        <h5>
          Essendant requires that all orders be entered via our online ordering
          portal, Empower Central and/or via Electronic Data Interchange (EDI).
          Confirm you can commit to submit your orders using these options.*
        </h5>
        <div>
          <input className="Cradio" type="radio"></input>
          <label className="CR">
            <b>
              I commit to submit my orders via Empower Central and/or via EDI.
            </b>
          </label>
        </div>
        <h5>
          Essendant requires that customers agree to the Essendant Terms of
          Sale. Confirm your acceptance to the Terms of Sale.*
        </h5>
        <div>
          <input className="Cradio" type="radio"></input>
          <label className="CR">
            <b>I accept Essendant's Terms of Sale.</b>
          </label>
        </div>
      </div>
      <div className="Cp">
        <h4 className="h4">
          By submitting your application, you agree to Essendant's Privacy
          Notice, that the Terms of Sale will apply to your purchases from
          Essendant and that you meet the customer requirements outlined above.
        </h4>
        <br></br>
      </div>
      <div className="Cbtn">
        <button>SUBMIT</button>
      </div>
      <div className="Ch5">
        <h5>
          Essendant reserves the right to refuse to sell to any person or firm,
          and to extend or withhold lines of open account credit to any dealer
          determined by the dealer’s experience, record of trade payments,
          financial condition, amount of credit needed, etc. Depending on these
          factors, Essendant may require current financial information,
          particularly if such information is not available through routine
          sources (i.e., Dun & Bradstreet, Business Products Credit Association,
          personal guarantees and/or other security interests).
        </h5>
      </div>

      <div className="Csection">
        <div>
          <div className="Ctextl">
            <h1>Already A Reseller?</h1>
            <h3>Access our services online.</h3>
          </div>
          <div className="sec">
            <div className="sec1">
              <img src="/images/solutions.png" alt="" />
              <h4>For Office Facilities / Resellers</h4>
              <a href="/#">Log in to Solutions Central</a>
              <h3>
                If you are a Business & Facility Essentials customer and do not
                have login credentials, e‑mail technicalsupport@essendant.com
              </h3>
            </div>
            <div className="sec2">
              <img src="/images/Azerty.png" alt="" />
              <h4>For Printing/Imaging Resellers</h4>
              <a href="/#">Log in to Azerty.com</a>
            </div>
            
            <div className="sec3">
            {/* <hr></hr> */}
              <img src="/images/biggestbook.png" alt="" />
              <h4>For Resellerss</h4>
              <a href="/#">Visit BiggestBook.com</a>
            </div>
            <div className="sec4">
              <img src="/images/empower.png" alt="" />
              <h4>For Resellers</h4>
              <a href="/#">Log in to Empower Central</a>
            </div>
          </div>
        </div>
      </div>

      <hr className="Cline" />
    </>
  );
};

export default Customer;
