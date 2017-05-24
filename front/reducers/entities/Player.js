import { handleActions }   from 'redux-actions'
import _                   from 'lodash'
import Actions             from '../../constants/Actions'
import PlayerModel         from '../../models/Player'

const newState = (state, data) => Object.assign({}, state, data)

const playerInitial = { players: {} }

const mergePlayer = (state, action) => {
  const players = action.payload.entities.players
  return newState(state, {
    players: _.merge({},
      state.players,
      _.mapValues(players, p => new PlayerModel(p))
    )
  })
}

const deletePlayer = (state, action) => {
  return newState(state, {
    players: _.pickBy(state.players,
      p => p.id != action.payload )
  })
}

const playerReducer = {
  [Actions.guitar.merge]: { next: mergePlayer },
  [Actions.player.merge]: { next: mergePlayer },
  [Actions.player.delete]: { next: deletePlayer }
}

export default handleActions(playerReducer, playerInitial)
