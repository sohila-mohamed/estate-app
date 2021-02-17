import React from 'react';
import './style.css'
import { BsChevronDown } from "react-icons/bs";

const Faq = () => {
  return (
    <div className="faq">
      <div className="container">
        <div className="row">
          <div className="text col-lg-4 col-sm-12">
            <h2 className="text-justify">Frequently ask</h2>
            <details>
              <summary><BsChevronDown /> is lorem ipsum?</summary>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever</p>
            </details>
            <details>
              <summary><BsChevronDown /> what is lorem ipsum?</summary>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever</p>
            </details>
            <details>
              <summary><BsChevronDown /> what is lorem ipsum?</summary>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever</p>
            </details>
          </div>
          <div className="photo offset-2 col-lg-6 col-sm-12">
            <img src="images/person1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq;
