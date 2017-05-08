import { combineReducers } from 'redux'
import User                from './User'
import Guitar              from './Guitar'
import Player              from './Player'
import Actions             from '../constants/Actions'

const appReducer = combineReducers({
  User,
  Guitar,
  Player
})

const rootReducer = (state, action) => appReducer(state, action)

export default rootReducer
