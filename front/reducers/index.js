import { combineReducers } from 'redux'
import Guitar              from './Guitar'
import User                from './User'
import Actions             from '../constants/Actions'

const appReducer = combineReducers({
  User,
  Guitar
})

const rootReducer = (state, action) => appReducer(state, action)

export default rootReducer
