/*import React, { Component } from 'react';

const EstateContext = React.createContext();

class EstateProvider extends Component {
  state = {
    like: false,
    light: { color: '#919191' },
    orange: { color: '#FDAE5C' }
  };

  toggleLike = () => {
    this.setState({ like: !this.state.like});
  }

  render(){
    return (

      <EstateContext.Provider value={{
        ...this.state,
        toggleLike: this.toggleLike
      }}>
        {this.props.children}
      </EstateContext.Provider>

    );
  }
}
const EstateConsumer = EstateContext.Consumer;
export{ EstateContext, EstateProvider, EstateConsumer };*/
