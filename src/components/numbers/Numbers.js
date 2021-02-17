import React from 'react';
import './style.css'

const Numbers = () => {
  return (
    <div className="counter">
      <div className="container">
        <div className="row">
          <div className="num col-lg-4 col-sm-12">
            <span className="number"> 200+</span>
            <p>properties for sale</p>
          </div>
          <div className="num col-lg-4 col-sm-12">
            <span className="number">300</span>
            <p>properties for sale</p>
          </div>
          <div className="num col-lg-4 col-sm-12">
            <span className="number">15</span>
            <p>properties for sale</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers;
