import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { EstateProvider } from "./context/context.js";
import { BrowserRouter as Router} from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";
//import { SearchProvider } from "./context/searchContext/SearchProvider";
//import searchReducer, { initialSearchState } from "./context/searchContext/searchReducer";

import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './redux/rootReducer'

const store = createStore(reducer)
/*
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
*/
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
  {/*<SearchProvider initialState={initialSearchState} reducer={searchReducer}>*/}
  <EstateProvider>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  </EstateProvider>
  {/*</SearchProvider>*/}
  </StateProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
