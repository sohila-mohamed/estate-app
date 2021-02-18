import React from 'react';
import {useStateValue} from "../../context/StateProvider";
import './style.css';

import Nav     from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer';

import { FaBath, FaHeart } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosBed } from 'react-icons/io'

function Likes () {
  const [{ likes }, dispatch] = useStateValue();

  const remove = () => {
    dispatch({
      type: "REMOVE",
      //id: id,
    })
  }

    return(
      <>
        <div className="navStyle">
          <Nav />
        </div>

      <div className="container">
        <h2 className="text-center" style={{margin:"100px 0"}}> your likes list </h2>
        {likes.map(item => (
        <div className="col-lg-4 col-sm-6" id={item.id} key={item.id}>
          <div className="card">
            <div className="photo">
              <img src={item.image} /> <br/>
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
                <span className="info bedroom"><IoIosBed /> {item.bedRoom}</span>
                <span className="info bathroom"><FaBath /> {item.bathRoom}</span>
              </div>
            </div>
          </div>
          <div className="btn">
          <button  className="remove" type="button" onClick={remove}>remove</button>
          </div>
        </div>
          
        ))}
        </div>
        <Footer />
      </>
    );

}

export default Likes;
