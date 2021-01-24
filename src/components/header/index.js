import React from 'react';
import './style.css';

import {FaGooglePlusG, FaFacebookF, FaLinkedinIn, FaPhone} from 'react-icons/fa';
import {MdPhone, MdEmail} from 'react-icons/md';

const Header = () => {
  return (

    <header>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p>Welcome to Conbusi consulting service</p>
          </div>
          <div className="col-2">
            <p><span><MdEmail /></span> info@gmail.com</p>
          </div>
          <div className="col-2">
            <p><span><MdPhone /></span> 012345678900</p>
          </div>
          <div className="col-2">
            <a href="#"> <FaLinkedinIn /> </a>
            <a href="#"> <FaFacebookF /> </a>
            <a href="#"> <FaGooglePlusG /> </a>
          </div>
        </div>
      </div>
    </header>


  )
}

export default Header;
