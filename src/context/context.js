import React, { Component } from 'react';
import {properties} from "../js/data.js";


const EstateContext = React.createContext();

export default class EstateProvider extends Component {
  state = {
    estates: [],
    location: "newyork",
    type: "all",
    price: 0,
    bedroom: 1,
    bathroom: 1,
  };



  render(){

    const estates = properties.map( (propert) => {
      return (
        <div id={propert.id} key={propert.id}>
          {propert.img}
          {propert.title}
          {propert.btnUp}
          {propert.location}
          {propert.btnDown}
          {propert.info}
        </div>
      )
    });
    console.log({estates})
    return (

      <EstateContext.Provider value={{
        ...this.state,

      }}>
        {this.props.children}
      </EstateContext.Provider>

    );
  }
}
const EstateConsumer = EstateContext.Consumer;
export{ EstateContext, EstateProvider, EstateConsumer };

export function withEstateConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <EstateConsumer>
        {value => <Component {...props} context={value} />}
      </EstateConsumer>
    );
  };
}
