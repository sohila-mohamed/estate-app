import React, {useState, useEffect} from 'react';
import {Propert ,MainTitle, Img, Card, Type,Icon, Btn, Price, P, Info, More, Photo} from './style.js'
import axios from 'axios'
import { FaBath, FaHeart } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosBed } from 'react-icons/io'
import { useStateValue } from "../../context/StateProvider";
import { EstateContext } from "../../context/context.js";
import LikeButton from "./LikeButton";
import { Link } from "react-router-dom";
//import { connect } from 'react-redux';

const Properties = () => {

    const [properties, setProperties] = useState([])

    useEffect ( () => {
      axios.get('js/data.json').then( res => {setProperties(res.data.properties)})}, [])
    
    //const { properties } = this.props;
    
    const propertiesList = properties.map( (propertItem) => {

      return (

          <div className="col-lg-4 col-sm-6" id={propertItem.id} key={propertItem.id}>
            
            <Card className="card">
              <Photo>
                <Img src={propertItem.img} /> <br/>
                <Type>{propertItem.type}</Type>

                <LikeButton
                  id={propertItem.id}
                  image={propertItem.img}
                  title={propertItem.title}
                  location={propertItem.location}
                  type={propertItem.type}
                  price={propertItem.price}
                  size={propertItem.size}
                  bedRoom={propertItem.bedRoom}
                  bathRoom={propertItem.bathRoom}
                 />

              </Photo>
              <div className="card-body">
                <div className="text">
                  <Link to={'/' + propertItem.id}>
                  {propertItem.title} <br />
                  </Link>
                  <P><GoLocation /> {propertItem.location}</P>
                </div>
                <Btn>
                  <Price>{propertItem.price}</Price>
                </Btn>
                <div className="info">
                  <Info><AiOutlineHome />{propertItem.size}</Info>
                  <Info><IoIosBed />{propertItem.bedRoom}</Info>
                  <Info><FaBath />{propertItem.bathRoom}</Info>
                </div>
              </div>
            </Card>
          </div>

      )
    })

    return (
      <Propert>
        <div className="container">
          <MainTitle>
            <h2>Popular Properties</h2>
          </MainTitle>

          <div className="row">
            {propertiesList}
          </div>
          <More>more properties</More>
        </div>
      </Propert>
    )
  }

  /*const mapStateToProps = (state) => {
    return {
      properties: state.properties
    }
  }
  
  export default connect (mapStateToProps)*/
  export default Properties;
