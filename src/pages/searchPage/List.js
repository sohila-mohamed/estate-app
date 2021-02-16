import React from 'react';

class List extends React.Component {
  
  render(){
    const data = this.props.data;
    
    return (
      <div className="filter-items">
      {data.map( (item) => {
        return (
          <div className="filter-item" id={item.id} key={item.id}>
            <div className="card">
              <div>
                <img src={item.img} /> <br/>
                <span>{item.type}</span>
              </div>
              <div className="card-body">
                <div className="text">
                  {item.title} <br />
                  <p> {item.location}</p>
                </div>
                <span>
                  <span>{item.price}</span>
                </span>
                <div className="info">
                  <span>{item.size}</span>
                  <span>{item.bedRoom}</span>
                  <span>{item.bathRoom}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    )
  }
}
/*const List = () => {
  return (
    <>
      <p> merhbaaa </p>
    </>
  )
}
*/
export default List;
