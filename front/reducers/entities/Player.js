import { handleActions }   from 'redux-actions'
import _                   from 'lodash'
import Actions             from '../../constants/Actions'
import PlayerModel         from '../../models/Player'

const playerInitial = { players: {} }

const mergePlayer = (state, action) => {
  const players = action.payload.entities.players
  return {...state, 
    players: _.merge({}, state.players,
      _.mapValues(players, p => new PlayerModel(p))
    )
  }
}

const deletePlayer = (state, action) => {
  return {...state, 
    players: _.pickBy(state.players, p => p.id != action.payload )
  }
}

const playerReducer = {
  [Actions.guitar.merge]: mergePlayer,
  [Actions.player.merge]: mergePlayer,
  [Actions.player.delete]: deletePlayer
}

export default handleActions(playerReducer, playerInitial)
