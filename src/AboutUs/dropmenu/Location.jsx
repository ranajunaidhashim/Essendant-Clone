import React from "react";
import "../dropmenu/Location.css";
const Location = () => {
  return (
    <>
      <div>
        <div className="Aimg">
          <img src="./Dropdown/locations-header.jpg" alt="" />
        </div>
        <div className="Acentered">
          <h1>Locations</h1>
        </div>
      </div>
      <div className="loc">
      <h2>We power smarter, more flexible operations with over 30 distribution centers across the United States.</h2>
        <iframe
          title="Essen Locations"
          src="https://www.google.com/maps/d/embed?mid=1l2ULanq3oBs0osdMKj48N_VkUm3gk5M&ehbc=2E312F"
          width="100%"
          height="450"
        ></iframe>
        <div className="dis4">
            <div className="dflex">
                <img  alt="" src="./Dropdown/mapIcon2.png"/>
                <h3>Corporate Headquarters</h3>
            </div>
            <div  className="dflex">
                <img alt="" src="./Dropdown/mapIcon4.png"/>
                <h3>Call Centers</h3>
            </div>
            <div  className="dflex">
                <img  alt="" src="./Dropdown/mapIcon3.png"/>
                <h3>Distribution Centers</h3>
            </div>
            <div  className="dflex">
                <img alt="" src="./Dropdown/mapIcon1.png"/>
                <h3>Business Offices</h3>
            </div>
        </div>
        
      </div>
      <hr className="Aline"/>

    </>
  );
};

export default Location;
