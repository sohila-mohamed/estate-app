import React from 'react';
import axios from 'axios'
import './style.css'

class Agents extends React.Component {

  state = {
    agents : []
  }

  componentDidMount () {
    axios.get('js/data.json').then( res => {this.setState({agents: res.data.agents})})
  }

  render() {

    const {agents} = this.state;

    const agentsList = agents.map( (agentItem) => {
      return (
        <div className="col-lg-3 col-sm-6" key={agentItem.id}>
          <div className="agents text-center" key={agentItem.id}>
            <div className="photo">
              <img src={agentItem.img} />
            </div>
            <div className="desc">
              <h4>{agentItem.name}</h4>
              <p className="small">{agentItem.info}</p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="agent">
        <div className="container">
          <div className="title text-center">
            <h2>our agents</h2>
          </div>
          <div className="row">
            {agentsList}
          </div>
        </div>
      </div>
    )
  }

}


export default Agents;
