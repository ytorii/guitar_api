import { combineReducers } from 'redux'
import User                from './User'
import Guitar              from './Guitar'
import GuitarPlayer        from './GuitarPlayer'
import entities            from './entities'

const appReducer = combineReducers({
  entities,
  User,
  Guitar,
  GuitarPlayer
})

const rootReducer = (state, action) => appReducer(state, action)

export default rootReducer
