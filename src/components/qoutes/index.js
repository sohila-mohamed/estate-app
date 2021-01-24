import React from 'react';
import './style.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Qoutes = () => {
  return (

    <div className="qoutes">
      <div className="over-lay">
        <div className="container">
          <div className="slider">
          <Slider
            infinite= {true}
            speed= {2000}
            slidesToShow= {1}
            slidesToScroll= {1}
            autoplay= {true}
            autoplaySpeed= {5000}
            style={{outline:"none"}}>
            <div className="content2">
              <div className="text">
                <img src="images/quote.png" />
                <p className="text-center">There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.
                it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
              </div>
              <div className="photo">
                <img src="images/comment2.png" />
                <p className="text-center">robert thomson</p>
                <p className="small text-center">Business owner</p>
              </div>
            </div>
            <div className="content2">
              <div className="text">
                <img src="images/quote.png" />
                <p className="text-center">There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.
                it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
              </div>
              <div className="photo">
                <img src="images/harvard.png" />
                <p className="text-center">robert thomson</p>
                <p className="small text-center">Business owner</p>
              </div>
            </div>
          </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qoutes;
