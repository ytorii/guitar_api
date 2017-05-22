import { handleActions }   from 'redux-actions'
import _                   from 'lodash'
import Actions             from '../../constants/Actions'
import Player              from '../../models/Player'

const newState = (state, data) => Object.assign({}, state, data)

const playerInitial = { players: {} }

const errorState = (state, action) => {
  return newState(state, {
    errors: action.payload.messages
  })
}

const playerReducer = {

  [Actions.guitar.merge]: {
    next: (state, action) => {
      const players = action.payload.entities.players
      return newState(state, {
        players: _.merge({}, state.players, _.mapValues(players, p => new Player(p)))
      })
    },

    throw: errorState
  },

  [Actions.player.merge]: {
    next: (state, action) => {
      const players = action.payload.entities.players
      return newState(state, {
        players: _.merge({}, state.players, _.mapValues(players, p => new Player(p)))
      })
    },

    throw: errorState
  },

  [Actions.player.delete]: {
    next: (state, action) => {
      return newState(state, {
        players: _.pickBy(state.players, ( p => {
          return p.id != action.payload
        }))
      })
    },

    throw: errorState
  }
}

export default handleActions(playerReducer, playerInitial)
