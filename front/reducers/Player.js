import { handleActions }   from 'redux-actions'
import Actions             from '../constants/Actions'

const newState = (state, data) => Object.assign({}, state, data)

const playerInitial = {
  isSending: false
}

const playerReducer = {
  [Actions.player.toggleSending]:
    (state, action) => {
      return newState(state, {
        isSending: !state.isSending
      })
    }
}

export default handleActions(playerReducer, playerInitial)
