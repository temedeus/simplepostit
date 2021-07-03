import { combineReducers } from 'redux'
import postitReducer from './postitReducer'

const rootReducer = combineReducers({
  postit: postitReducer
})

export default rootReducer