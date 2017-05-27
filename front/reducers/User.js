import { handleActions } from 'redux-actions'
import Actions           from '../constants/Actions'
import ClientStorage     from '../utils/ClientStorage'

const newState = (state, data) => Object.assign({}, state, data)

const userInitial = () => {
  return {
    user: ClientStorage.fetchUser(),
    isSignedIn: ClientStorage.tokenExists(),
    isSending: false,
    isModalOpen: false,
    errors: []
  }
}

const userReducer = {
  [Actions.user.signIn]:
    (state, action) => {
      return newState(state, {
        user: action.payload,
        isSignedIn: true,
        isModalOpen: false
      })
    },

  [Actions.user.signOut]:
    (state, action) => {
      return newState(userInitial())
    },

  [Actions.user.toggleSending]:
    (state, action) => newState(state, { isSending: !state.isSending }),

  [Actions.user.toggleModal]: 
    (state, action) => newState(state, { isModalOpen: !state.isModalOpen }),

  [Actions.user.error]:
    (state, action) => {
      return newState(state, { errors: action.payload.messages })
    }
}

export default handleActions(userReducer, userInitial())
