import React from "react";
import "./Home.css";

const Findhome = () => {
  return (
    <>
      <div className="find">
        <div>
          <img src="/images/pic1c.jpg" alt="" />
        </div>
        <div className="centered">
          <ul>
            <li>
              <h1>SMARTER OPERATIONS</h1>
            </li>
            <li>
              <h3>
                With our flexible fulfillment solutions, you can buy what you
                need, when you need it and how you need it.
              </h3>
            </li>
            <li>
              <button>FIND OUT HOW »</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="dis">
        <div className="leftt">
          <img src="/images/pic2c.jpg" alt="" />
        </div>
        <div className="rightt">
          <ul>
            <li>
              <h1 className="uppercase">FASTER CATEGORY EXPANSION</h1>
            </li>
            <li>
              <h3>
                We power you to quickly and easily source a continually growing
                product portfolio and expand into new categories, all through
                one supplier.
              </h3>
            </li>
            <li>
              <button className="btn">DISCOVER MORE »</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="find">
        <div className="fltr">
          <img src="/images/pic3c.jpg" alt="" />
        </div>
        <div className="centered">
          <ul>
            <li>
              <h1>SUPPORTED BUSINESS GROWTH</h1>
            </li>
            <li>
              <h3>
                With industry-specific sales staff, advanced marketing services
                and strategic digital programs, we provide the tools necessary
                to grow your business.
              </h3>
            </li>
            <li>
              <button>GROW WITH US »</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Findhome;
