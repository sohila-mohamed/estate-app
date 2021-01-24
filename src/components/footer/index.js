import React from 'react';
import './style.css'
import {FaInstagram, FaFacebook, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (

    <footer>
      <div className="container">
        <div className="top">
          <div className="row">
            <div className="logo col-lg-4 col-sm-12">
              <h3 className="">real estate<span>.</span></h3>
              <ul className="list-unstyled">
                <li><a href="#">blabla@support.com</a></li>
                <li>+0123456789</li>
                <li>600/D, Green road, NewYork</li>
              </ul>
              <div className="icons">
                <a href="#"> <FaLinkedin /> </a>
                <a href="#"> <FaFacebook /> </a>
                <a href="#"> <FaInstagram /> </a>
              </div>
            </div>
            <div className="services col-lg-2 col-sm-12">
              <h6>services</h6>
              <ul className="list-unstyled">
                <li>markting</li>
                <li>seo</li>
                <li>startup</li>
                <li>food</li>
                <li>travel</li>
                <li></li>
              </ul>
            </div>
            <div className="links col-lg-2 col-sm-12">
              <h6>useful links</h6>
              <ul className="list-unstyled">
                <li>about</li>
                <li>blog</li>
                <li>contact</li>
                <li>appointment</li>
              </ul>
            </div>
            <div className="subscribe col-lg-4 col-sm-12">
              <h6>subscribe</h6>
              <form action="#" className="mail">
                <input type="email" name="mail" placeholder="enter your email" />
                <button type="submit" className="sub">subscribe</button>
              </form>
              <p className="small">it is a long established fact that a reader will be distracted</p>
            </div>
          </div>
        </div>
        <div className="copyright text-center">
            <p>Copyright ©2020 All rights reserved | This template is coding by <a href="#">sohila mohamed</a></p>
        </div>
      </div>
    </footer>


  )
}

export default Footer;
