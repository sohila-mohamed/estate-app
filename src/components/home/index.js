import React from 'react';
import './style.css'
import {IoIosSearch} from 'react-icons/io';

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

                <div className="col-lg-2.5 property">
                  <div className="property">
                    <label>location</label>
                    <select>
                      <option data-display="newyork">newyork</option>
                      <option value="1">bangladesh</option>
                      <option value="2">india</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2.5">
                  <div className="property">
                    <label>property type</label>
                    <select>
                      <option data-display="apartment">apartment</option>
                      <option value="1">apartment</option>
                      <option value="2">apartment</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="price">
                    <label> price ($) </label>
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

                <div className="col-lg-1">
                  <button className="search"><IoIosSearch /></button>
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
