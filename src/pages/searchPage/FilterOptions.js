import React from 'react';
import { properties } from '../../js/data';
import './style.css';

class FilterOptions extends React.Component {
  

  changeOption(typee, e){
    const val = e.target.value;
    this.props.changeOption(val, typee);

  };

  render(){

    return (
      <div className="filter-options">
        <div className="container">
        <div className="filter-option" >
          <label>location</label>
          <select id="location" value={this.props.location} onChange={this.changeOption.bind(this, 'location')}>
          {this.props.locationOptions.map( (option) => {
            return ( <option key={option.id} value={option}>{option}</option> )
          })}
          </select>
          <label>type</label>
          <select id= "type" value={this.props.type} onChange={this.changeOption.bind(this, 'type')}>
          {this.props.typeOptions.map( (option) => {
            return ( <option key={option.id} value={option}>{option}</option> )
          })}
          </select>
          <label>price</label>
          <select id="price" value={this.props.price} onChange={this.changeOption.bind(this, 'price')}>
          {this.props.priceOptions.map( (option) => {
            return ( <option key={option.id} value={option}>{option}</option> )
          })}
          </select>
          <label>bedroom</label>
          <select id="bedroom" value={this.props.bedroom} onChange={this.changeOption.bind(this, 'bedroom')}>
          {this.props.bedroomOptions.map( (option) => {
            return ( <option key={option.id} value={option}>{option}</option> )
          })}
          </select>
          <label>bathroom</label>
          <select id="bathroom" value={this.props.bathroom} onChange={this.changeOption.bind(this, 'bathroom')}>
          {this.props.bathroomOptions.map( (option) => {
            return ( <option key={option.id} value={option}>{option}</option> )
          })}
          </select>
        </div>
        </div>
      </div>
    );
  }
}

export default FilterOptions;
