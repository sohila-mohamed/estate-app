import React from 'react';
import Nav     from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer';
import './style.css';

class AddPage extends React.Component {
  render() {
    return(
      <>
        <div className="navStyle">
        <Nav />
        </div>
        <div className="container">
           
            <div className="boxs">
              <form name="add" action="" method="">

                <div className="upload">
                  <label>upload your main imag</label>
                  <input type="file" />
                </div>
                <div className="title">
                  <input type="text" name="title" placeholder="enter your title" />
                </div>

                <div className="enter">
                  <div className="row">
                    <div className="col-lg-4 col-sm-12">
                    <input type="text" name="location" placeholder="enter your location" />
                    </div>
                    <div className="col-lg-4 col-sm-12">
                    <input type="number" name="price" placeholder="enter your price" />
                    </div>
                    <div className="col-lg-4 col-sm-12">
                    <input type="number" name="size" placeholder="enter your size" />
                    </div>
                  </div>
                </div>
                
                <div className="options">
                  <div className="row">

                    <div className="col-lg-4 col-sm-12">
                      <div className="">
                        <label> type</label>
                        <select>
                          <option data-display=""></option>
                          <option value="1">for rent</option>
                          <option value="2">for sale</option>
                        </select>
                      </div>
                    </div>
                  
                    <div className="col-lg-4 col-sm-12">
                      <div className="number">
                        <label>bed room</label>
                        <select>
                          <option data-display=""></option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
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

                <div className="textArea">
                <textarea name="descripition" placeholder="enter your description"></textarea>
                </div>
                <div className="btnsub">
                <button className="orange" type="submit">submit</button>
                </div>
              </form>
            </div>

          

        </div>
        <Footer />
      </>
    )
  }
}

export default AddPage;
