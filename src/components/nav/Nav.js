import React,{useEffect} from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import {FaRegHeart} from 'react-icons/fa';
import {FaAlignRight} from 'react-icons/fa';
import { useStateValue } from "../../context/StateProvider";


function Nav (){
  const [{ likes }] = useStateValue();
  const [isOpen, setIsOpen]=React.useState(false);
  const [scrolled,setScrolled]=React.useState(false);
  
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let navbarClasses = document.getElementById("sticky");
  if(scrolled){
    navbarClasses.classList.add('scrolled');
  }
  
  
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  
  

  return (

    <div className="main-nav" id="sticky">
      <div className="container">
        <div className="row">

          <div className="logo col-lg-3 col-sm-5 col-xs-6">
            <h2> real estate<span>.</span> </h2>
          </div>

          <div className="nav col-lg-6 col-sm-0 col-xs-0">
            <nav className="navbar navbar-expand-md">
                <ul className=
                {`navbar-nav ${isOpen ? "active" : "inactive"}`} >
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Container.js" className="nav-link">Properties</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Likes.js" className="nav-link">Wish List</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/AddPage.js" className="nav-link">Add Prop</Link>
                  </li>
                </ul>
            </nav>
          </div>

          <div className="btns col-lg-3 col-sm-4 col-xs-6">
            <Link to="/Likes.js">
              <div  className="like-property">
                <p className="icon"><FaRegHeart /></p>
                <span className="like-counter">{likes?.length}</span>
              </div>
            </Link>

            <button className="add-prop orange">
              <Link to="/AddPage.js" className="add" >add proberty</Link>
            </button>

            <button className="nav-btn" type="button" onClick={handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;
