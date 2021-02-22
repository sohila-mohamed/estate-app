import React from 'react';
import axios from 'axios';
//import { connect } from 'react-redux';

class PropertItem extends React.Component {
  
    state = {
      propertItem: null
    }

  componentDidMount(){

    let id = parseInt(this.props.match.params.propertItem_id);

     axios.get('js/data.json' + id )
    .then( res => {
      this.setState({
        propertItem: res.data
      })
    })
    console.log({id})
  }
  
  render() {

    const propertItem = this.props.propertItem ? (
      <>
        <div>
          <img src={this.props.propertItem.img} /> <br/>
          <span>{this.props.propertItem.type}</span>
        </div>
        <div className="card-body">
          <div className="text">
            {this.props.propertItem.title} <br />
            <p> {this.props.propertItem.location}</p>
          </div>
          <span>
            <span>{this.props.propertItem.price}</span>
          </span>
          <div className="info">
            <span>{this.props.propertItem.size}</span>
            <span>{this.props.propertItem.bedRoom}</span>
            <span>{this.props.propertItem.bathRoom}</span>
          </div>
        </div>
      </>

    ) : (
      <div> loading... </div>
    )

    console.log({propertItem});
    return (
      <div>
        {propertItem}
      </div>
    );
  }
}

/*const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.propertItem_id;
  return {
    propertItem: state.properties.find( propertItem => propertItem.id === id)
  }
}

export default connect (mapStateToProps)*/ 
export default PropertItem;
