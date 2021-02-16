import React from 'react';

class AddPage extends React.Component {
  render() {
    return(
      <>
        <div className="Img">
          <img src=''></img>
        </div>

        <div className="container-fluid">
           <p>merhbaa</p>
            <div className="smallBoxs">
              <form name="add" action="" method="">
                <div>
                <label>upload your main imag</label>
                <input type="file" />
                </div>
                <div>
                <input type="text" name="title" placeholder="enter your title" />
                </div>

                <div className="options">
                <input type="text" name="location" placeholder="enter your location" />
                <input type="number" name="price" placeholder="enter your price" />
                <input type="number" name="size" placeholder="enter your size" />
                </div>
                
                <div className="options">
              <div className="row">

                

                <div className="col-lg-2.5">
                  <div className="">
                    <label> type</label>
                    <select>
                      <option data-display=""></option>
                      <option value="1">for rent</option>
                      <option value="2">for sale</option>
                    </select>
                  </div>
                </div>

               
                <div className="col-lg-1.5">
                  <div className="number">
                    <label>bed room</label>
                    <select>
                      <option data-display=""></option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-1.5">
                  <div className="number">
                    <label>bath room</label>
                    <select>
                      <option data-display=""></option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>

                </div>
                </div>
                <div>
                <textarea name="descripition" placeholder="enter your description"></textarea>
                </div>
                <div>
                <button type="submit">submit</button>
                </div>
              </form>
            </div>

          <div className="bigBox">
          </div>

        </div>
      </>
    )
  }
}

export default AddPage;
