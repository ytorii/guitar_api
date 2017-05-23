import { handleActions } from 'redux-actions'
import Actions           from '../constants/Actions'
import ClientStorage      from '../utils/ClientStorage'

const newState = (state, data) => Object.assign({}, state, data)

const userInitial = () => {
  return {
    user: ClientStorage.fetchUser(),
    isSignedIn: ClientStorage.tokenExists(),
    isSending: false,
    isModalOpen: false
  }
}

const userReducer = {
  [Actions.user.signIn]:{
    next: (state, action) => {
      return newState(state, {
        user: action.payload,
        isSignedIn: true,
        isModalOpen: false
      })
    },

    throw: (state, action) => {
      console.log('ERROR')
      return newState(state, {
        isSignedIn: false,
        errors: action.payload.messages
      })
    }
  },

  [Actions.user.signOut]:
    (state, action) => {
      return newState(userInitial())
    },

  [Actions.user.checkSignin]:{
    next: (state, action) => {
      return newState(state, {
        isSignedIn: action.payload.success,
      })
    },

    throw: (state, action) => {
      return newState(state, {
        isSignedIn: false,
        errors: action.payload.messages
      })
    }
  },

  [Actions.user.toggleSending]:
    (state, action) => {
      return newState(state, {
        isSending: !state.isSending
      })
    },

  [Actions.user.toggleModal]: 
    (state, action) => {
      return newState(state, {
        isModalOpen: !state.isModalOpen
      })
    }
}

export default handleActions(userReducer, userInitial())
