import React , {Component} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";


//import LikeContext from './context/likecontext';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import LandingPage from './pages/landingPage.js'
import Likes from "./pages/likesPage/Likes.js"
import Container from "./pages/searchPage/Container.js"
import AddPage from './pages/addPage/AddPage.js'
import More from './pages/more/More.js'
import SinglePropert from './pages/singlePropert/SinglePropert.js'
import Properties from './components/properties'

class App extends Component {
  render() {
    return (
      <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/AddPage.js">
          <AddPage />
        </Route >
        <Route path="/Likes.js">
          <Likes />
        </Route >
        <Route path="/Container.js">
          <Container />
        </Route >

      </Switch>
      </>

    );
  }
}

export default App;
