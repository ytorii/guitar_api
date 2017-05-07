import { handleActions } from 'redux-actions'
import Actions           from '../constants/Actions'
import TokenStorage      from '../utils/TokenStorage'

const newState = (state, data) => Object.assign({}, state, data)

const userInitial = {
  user: null,
  isSignedIn: TokenStorage.exists(),
  isSending: false,
  isModalOpen: false
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
        user: action.payload.data,
        isSignedIn: true,
        isSending: false,
        isModalOpen: false
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
  },

  [Actions.user.toggleModal]: 
    (state, action) => {
      return newState(state, {
        isModalOpen: !state.isModalOpen
      })
    }
}

export default handleActions(userReducer, userInitial)
