import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import "./images/bannerfirst.jpg";
// import "./images/bannerscnd.jpg";
// import "./images/bannerthird.jpg";
import Sdata from "./Sdata";

export const Slidecard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
    <Slider {...settings}>
        {/* <div >
          <img src="bannerfirst.jpg" alt="" />
        </div>
        <div>
          <img src="bannerscnd.jpg" alt="" />
        </div>
        <div>
          <img src="bannerthird.jpg" alt="" />
        </div> */}

        {Sdata.map((i, index) => {
          return (
            <div className="box " key={index}>
            <img src={i.cover} alt="" />
            {/* <div className="Slidecentered "  key={index}>
            <h1>{i.title} </h1>
            <h5>{i.desc}</h5>
            <button>{i.btn}</button>
            </div> */}
            </div>
            
          );
        })}

    </Slider>
    </>
  );
};
