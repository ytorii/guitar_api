import { handleActions } from 'redux-actions'
import Actions           from '../constants/Actions'
import _                 from 'lodash'

const newState = (state, data) => Object.assign({}, state, data)

const guitarPlayerInitial = {
  guitarPlayers: {}
}

const guitarPlayerReducer = {
  [Actions.guitar.merge]: {
    next: (state, action) => {
      const guitars = action.payload.entities.guitars
      return newState(state, {
        guitarPlayers: _.merge({}, state.guitarPlayers, 
          _.mapValues(guitars, g => g.players)
        )
      })
    }
  },

  [Actions.player.merge]: {
    next: (state, action) => {
      const playerId = action.payload.result[0]
      const players = action.payload.entities.players
      return newState(state, {
        guitarPlayers: _.merge({}, state.guitarPlayers, 
          _.mapValues(guitars, g => g.players)
        )
      })
    }
  }
}

export default handleActions(guitarPlayerReducer, guitarPlayerInitial)
