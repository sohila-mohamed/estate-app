import React, {useState, useEffect} from 'react';
import { FaHeart } from 'react-icons/fa';
import {Icon} from './style.js';
import { useStateValue } from "../../StateProvider";

function LikeButton (props) {
  const id = props.id;
  const title = props.title;
  const image = props.title;
  const location = props.location;
  const type = props.type;
  const price = props.price;


  const [{ likes, colors }, dispatch] = useStateValue();

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
      },
    });
  };

  return (
    <Icon onClick={likeProperty}>
       <FaHeart  style={colors} />
     </Icon>
  )
}
export default LikeButton;
