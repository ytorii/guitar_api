import { combineReducers } from 'redux'
import Guitar              from './Guitar'
import User                from './User'
import Actions             from '../constants/Actions'

const appReducer = combineReducers({
  User,
  Guitar
})

const rootReducer = (state, action) => {
  // All state shuold be removed after sign out.
  if(action.type === Actions.user.signOut) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
