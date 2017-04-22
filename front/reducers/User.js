import { handleActions }   from 'redux-actions'
import Actions             from '../constants/Actions'

const newState = (state, data) => Object.assign({}, state, data)

const userInitial = {
  isSignedIn: false,
  isSending: false,
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
    //TODO: Delete Guitar's state at the same time!
    (state, action) => {
      return newState(userInitial)
    }
}

export default handleActions(userReducer, userInitial)
