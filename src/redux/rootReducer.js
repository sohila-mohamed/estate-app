import {LIKE_PROPERTY, UNLIKE_PROPERTY, SEARCH_PROPERTY, ADD_PROPERTY} from './types'

const initState = {

}

const rootReducer = (state = initState , action)=>{
  if(action.type == 'LIKE_PROPERTY'){
    return {count: state.count + 1}
  } else {
    return state
  }
}

export default rootReducer
