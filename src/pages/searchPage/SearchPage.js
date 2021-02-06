import React from 'react';
import { EstateContext } from "../../context/context.js";

const SearchPage = () => {
  const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
  };
  return (
    <>
      <h1> hello </h1>
    </>
  )
}

export default SearchPage;
