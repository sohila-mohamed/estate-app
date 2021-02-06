import React from 'react';
import { withEstateConsumer, EstateConsumer } from "../../context/context.js";

import SearchPage from "./SearchPage";
import List from "./List";

const Container = () => {
  return (

      <EstateConsumer>
        {value => {
          console.log(value);

          return (
            <>
            Container
            <SearchPage />
            <List />
            </>
          );
        }}
      </EstateConsumer>
  );
}

export default Container;
