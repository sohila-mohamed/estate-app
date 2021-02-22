import axios from "axios";

function getData (){
  axios.get('js/data.json')
  .then( res => {
    return res.data;
  })
}

let properties = getData();

const initialState = {
  properties
}

const rootReducer = (state = initialState , action) => {
  return state;
}

export default rootReducer
