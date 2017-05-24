import { combineReducers } from 'redux'
import Guitar              from './Guitar'
import Player              from './Player'
import GuitarPlayer        from './GuitarPlayer'

export default combineReducers({
  Guitar,
  Player,
  GuitarPlayer
})
