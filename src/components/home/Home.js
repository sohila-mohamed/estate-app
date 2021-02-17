import React from 'react';
import './style.css'
import {IoIosSearch} from 'react-icons/io';
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div className="home">
      <div className="over-lay">

        <div className="container">
          <div className="content">
            <div className="hp text-center">
              <h1>find your best property</h1>
              <p>Esteem spirit temper too say adieus who direct esteem.</p>
            </div>

            <div className="form">
              <div className="row">

                <div className="col-lg-2.5 ">
                  <div className="property">
                    <label>location</label>
                    <select>
                      <option data-display="newyork">newyork</option>
                      <option value="1">San Francisco</option>
                      <option value="2">losengles</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2.5">
                  <div className="property">
                    <label>property type</label>
                    <select>
                      <option data-display="for rent">for rent</option>
                      <option value="1">for sale</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-1.5">
                  <div className="price">
                    <label> price ($) </label>
                      <select>
                        <option data-display="apartment">20K$</option>
                        <option value="1">563$</option>
                        <option value="2">30k$</option>
                      </select>
                  </div>
                </div>

                <div className="col-lg-1.5">
                  <div className="number">
                    <label>bed room</label>
                    <select>
                      <option data-display="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-1.5">
                  <div className="number">
                    <label>bath room</label>
                    <select>
                      <option data-display="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-1.5">
                  <div className="number">
                    <label>size</label>
                    <select>
                      <option data-display="1">700-1000</option>
                      <option value="2">1000-1200</option>
                      <option value="3">1200-1500</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-1">
                  <div className="search-btn">
                    <Link to="Container.js">
                    <button className="search"><IoIosSearch /></button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
