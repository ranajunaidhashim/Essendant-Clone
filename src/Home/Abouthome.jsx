import React from "react";
import "./Home.css"
// import "images/bannerfirst.jpg"
function Abouthome() {
  return (
    <>
    <div className="dis" >
      <div className="leftt">
        <img src="/images/truck.jpg" alt="" />
      </div>
      <div className="rightt">
        <ul>
          <li>
            <h1 className="uppercase">WHO WE ARE</h1>
          </li>
          <li>
            <h3>
              We’re the partner you need to help you reach beyond what is
              possible on your own. With decades of experience and essential
              expertise, we power you to unlock your full potential and win in
              an ever-changing marketplace.
            </h3>
          </li>
          <li>
            <button  className='btn'>SEE OUR STORY »</button>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Abouthome;
