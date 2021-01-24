import {LIKE_PROPERTY, UNLIKE_PROPERTY, SEARCH_PROPERTY, ADD_PROPERTY} from '../types'

export const like_property = () => {
    const action = {
      type: LIKE_PROPERTY
    }
    return action
}
export const unlike_property = () => {
    const action = {
      type: UNLIKE_PROPERTY
    }
    return action
}
export const search_property = () => {
    const action = {
      type: SEARCH_PROPERTY
    }
    return action
}
export const add_property = () => {
    const action = {
      type: ADD_PROPERTY
    }
    return action
}
