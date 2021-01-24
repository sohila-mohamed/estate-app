import React , {useState , useEffect} from 'react';
import axios from 'axios';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {HomeDesc, Carousel, Card, Span, MainTitle, BtnD, P, Info, H2, Section, DivInfo} from './style.js'
import { FaBath } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosBed } from 'react-icons/io'



const Forsale = () => {

  const [cards , setCards] = useState([])

  useEffect ( () => {
    axios.get('js/data.json').then ( res => { setCards(res.data.cards)})} , [] )

  const cardsList = cards.map ( (cardItem) => {
    return (


      <Card item={cardItem.id} key={cardItem.id} >
        <Span className="for">{cardItem.span}</Span>
        <div className="text">
          <MainTitle>{cardItem.title}</MainTitle> <br />
          <P><GoLocation />{cardItem.location}</P>
        </div>
        <DivInfo>
          <Info><AiOutlineHome /> {cardItem.sqft} </Info>
          <Info><IoIosBed /> {cardItem.bed} </Info>
          <Info><FaBath /> {cardItem.bath} </Info>
        </DivInfo>
        <div className="paragraph">
          <P>
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form,
          by injected humour, or randomised words which don't look
          even slightly believable.
          </P>
        </div>
        <div className="price">
          <H2>{cardItem.price}</H2>
          <BtnD>view details</BtnD>
        </div>
      </Card>

    )
  })
  return (
    <HomeDesc>

      <div className="container">
        <Carousel>
        <Slider
          infinite= {true}
          speed= {2000}
          slidesToShow= {1}
          slidesToScroll= {1}
          autoplay= {true}
          autoplaySpeed= {5000}
          style={{width:"50%"}}>

            {cardsList}

        </Slider>
        </Carousel>
      </div>
    </HomeDesc>

  )
}

export default Forsale;
