import React from 'react';
import './style.css';

import { FaBath, FaHeart } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosBed } from 'react-icons/io'

class List extends React.Component {
  
  render(){
    const data = this.props.data;
    
    return (
      <div className="filter-items">
        <div className="container">
        <div className="row">
      {data.map( (item) => {
        return (
          <div className="filter-item col-lg-4 col-sm-6" id={item.id} key={item.id}>
            <div className="card">
              <div className="photo">
                <img src={item.img} /> <br/>
                <span className="type">{item.type}</span>
              </div>
              <div className="card-body">
                <div className="text">
                 <h5>{item.title}</h5> 
                  <p><GoLocation /> {item.location}</p>
                </div>
                <div className="priceSpan">
                  <span className="price">{item.price}</span>
                </div>
                <div className="info">
                  <span className="info size"><AiOutlineHome /> {item.size}</span>
                  <span className="info bedroom"><IoIosBed /> {item.bedroom}</span>
                  <span className="info bathroom"><FaBath /> {item.bathroom}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
        </div>
        </div>
      </div>
    )
  }
}

export default List;
