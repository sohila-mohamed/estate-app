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

const Properties = () => {

    const [properties, setProperties] = useState([])

    useEffect ( () => {
      axios.get('js/data.json').then( res => {setProperties(res.data.properties)})}, [])

    const propertiesList = properties.map( (propertItem) => {

      return (

          <div className="col-lg-4 col-sm-6" id={propertItem.id} key={propertItem.id}>
            <Card className="card">
              <Photo>
                <Img src={propertItem.img} /> <br/>
                <Type>{propertItem.btnUp}</Type>

                <LikeButton
                  id={propertItem.id}
                  image={propertItem.img}
                  title={propertItem.title}
                  location={propertItem.location}
                  type={propertItem.btnUp}
                  price={propertItem.btnDown}
                 />

              </Photo>
              <div className="card-body">
                <div className="text">
                  {propertItem.title} <br />
                  <P><GoLocation /> {propertItem.location}</P>
                </div>
                <Btn>
                  <Price>{propertItem.btnDown}</Price>
                </Btn>
                <div className="info">
                  <Info><AiOutlineHome /> 1200sqft </Info>
                  <Info><IoIosBed /> 2 bed </Info>
                  <Info><FaBath /> 2 bath </Info>
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


export default Properties;
