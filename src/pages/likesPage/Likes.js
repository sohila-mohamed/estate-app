import React from 'react';
import {useStateValue} from "../../context/StateProvider";

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
        <h2> your likes list </h2>
        {likes.map(item => (
          <div key={item.id} id={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} />
            <p>{item.location}</p>
            <p>{item.type}</p>
            <p>{item.price}</p>
            <button type="button" onClick={remove}>remove</button>
          </div>
        ))}
      </>
    );

}

export default Likes;
