import { handleActions }   from 'redux-actions'
import Actions             from '../constants/Actions'

const playerInitial = {
  isSending: false,
  errors: []
}

const playerReducer = {
  [Actions.player.toggleSending]:
    (state, action) => {
      return {...state, isSending: !state.isSending }
    },

  [Actions.player.error]: 
    (state, action) => {
      return {...state, errors: action.payload.messages }
    }
}

export default handleActions(playerReducer, playerInitial)
