import { combineReducers } from 'redux'
import User                from './User'
import Guitar              from './Guitar'
import Player              from './Player'
import GuitarPlayer        from './GuitarPlayer'
import entities            from './entities'

const appReducer = combineReducers({
  entities,
  User,
  Guitar,
  Player,
  GuitarPlayer
})

const rootReducer = (state, action) => appReducer(state, action)

export default rootReducer
