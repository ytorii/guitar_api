import { combineReducers } from 'redux'
import Guitar              from './Guitar'
import User                from './User'

const rootReducer = combineReducers({
  User,
  Guitar
})

export default rootReducer
