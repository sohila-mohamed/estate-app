import React, {useState, useEffect} from 'react';
import { FaHeart } from 'react-icons/fa';
import {Icon} from './style.js';
import { useStateValue } from "../../context/StateProvider";

function LikeButton (props) {
  const id = props.id;
  const title = props.title;
  const image = props.image;
  const location = props.location;
  const type = props.type;
  const price = props.price;
  const size = props.size;
  const bedRoom = props.bedRoom;
  const bathRoom = props.bathRoom;


  const [{ likes, colors }, dispatch] = useStateValue();

  const [isKlicked, setIsKlicked]=React.useState(false);

  const likeProperty = () => {
    dispatch({
      type: "LIKE_PROPERTY",
      item: {
        id: id,
        title: title,
        image: image,
        location: location,
        type:type,
        price:price,
        size:size,
        bedRoom:bedRoom,
        bathRoom:bathRoom,
      },
    });
    setIsKlicked(!isKlicked);
  };

  return (
    <Icon onClick={likeProperty}>
       <FaHeart />
     </Icon>
  )
}
export default LikeButton;
