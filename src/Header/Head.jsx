import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { GoSearch } from "react-icons/go";
import "./Header.css";
import Search from "./Search";

const Head = () => {
  var [searchbar, setSearchbar] = useState("input");
const searchme = (e) =>{
  e.preventDefault();
}

  return (
    <>
      <section className="head">
        <div className="container d_flex">
          {/* <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +88012 3456 7894</label>
            <i className='fa fa-envelope'></i>
            <label> support@ui-lib.com</label>
          </div> */}
          <div className="right row RText">
            <label>
              <ImLinkedin2 className="linkedin" />
            </label>
            <label>
              <FaFacebookF className="facebook"   />
            </label>
            <label>Contact us</label>
            <label>
              <GoSearch className="search"></GoSearch>Search
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
