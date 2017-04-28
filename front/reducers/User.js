import { handleActions } from 'redux-actions'
import Actions           from '../constants/Actions'
import TokenStorage      from '../utils/TokenStorage'

const newState = (state, data) => Object.assign({}, state, data)

const userInitial = {
  isSignedIn: TokenStorage.exists(),
  isSending: false
}

const userReducer = {
  [Actions.user.sendCredentials]:
    (state, action) => {
      return newState(state, {
        isSending: true
      })
    },

  [Actions.user.signIn]:{
    next: (state, action) => {
      return newState(state, {
        isSignedIn: true,
        isSending: false
      })
    },

    throw: (state, action) => {
      return newState(state, {
        isSignedIn: false,
        isSending: false,
        errors: action.payload.messages
      })
    }
  },

  [Actions.user.signOut]:
    (state, action) => {
      return newState(userInitial)
    },

  [Actions.user.checkSignin]:{
    next: (state, action) => {
      return newState(state, {
        isSignedIn: action.payload.success,
        isSending: false
      })
    },

    throw: (state, action) => {
      return newState(state, {
        isSignedIn: false,
        isSending: false,
        errors: action.payload.messages
      })
    }
  }
}

export default handleActions(userReducer, userInitial)
