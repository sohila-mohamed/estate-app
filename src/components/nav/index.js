import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import {FaRegHeart} from 'react-icons/fa';
import {FaAlignRight} from 'react-icons/fa';
import { useStateValue } from "../../context/StateProvider";


function Nav (){
  const [{ likes }] = useStateValue();

  /*
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen})
  };*/

  return (

    <div className="main-nav">
      <div className="container">
        <div className="row">

          <div className="logo col-3">
            <h2> real estate<span>.</span> </h2>
          </div>

          <div className="nav col-6">
            <nav className="navbar navbar-expand-md">
                <ul /*className=
                {this.state.isOpen ? "navbar-nav" : "notshow"}*/ className="navbar-nav">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">Link 1</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">Link 2</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">Link 3</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">Link 4</Link>
                  </li>
                </ul>
            </nav>
          </div>

          <div className="btn col-3">
            <Link to="/Likes.js">
              <div  className="like-property">
                <p className="icon"><FaRegHeart /></p>
                <span className="like-counter">{likes?.length}</span>
              </div>
            </Link>

            <button className="orange">
              <Link to="/AddPage.js" className="add" >add proberty</Link>
            </button>

            {/*<button className="nav-btn" type="button" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>*/}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;
