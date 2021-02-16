import React from 'react';
import axios from 'axios';

class PropertItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      propertItem: []
    }
  }

  componentDidMount(){
    /*let id = window.location.pathname;
    id = id.split("propertItem/");

    const fd = new FormData();
        fd.append('id', id[1]);
        axios.post('js/data.json', fd
          ).then(res=>
          {

            //Storing product detail in state array object
            this.setState({propertItem: res.data[0]});


          }
        );*/


    let id = this.props.match.params.propertItem_id;
    axios.get('js/data.json' + id)
    .then( res => {
      this.setState({
        propertItem: res.data
      })
    })
  }

  render() {

    const propertItem = this.state.propertItem ? (
      <div className="card">
        <div>
          <img src={this.state.propertItem.img} /> <br/>
          <span>{this.state.propertItem.type}</span>
        </div>
        <div className="card-body">
          <div className="text">
            {this.state.propertItem.title} <br />
            <p> {this.state.propertItem.location}</p>
          </div>
          <span>
            <span>{this.state.propertItem.price}</span>
          </span>
          <div className="info">
            <span>{this.state.propertItem.size}</span>
            <span>{this.state.propertItem.bedRoom}</span>
            <span>{this.state.propertItem.bathRoom}</span>
          </div>
        </div>
      </div>

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

export default PropertItem;
