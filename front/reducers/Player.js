import { handleActions }   from 'redux-actions'
import Actions             from '../constants/Actions'

const newState = (state, data) => Object.assign({}, state, data)

const playerInitial = {
  player: {},
  isEdit: false
}

const playerReducer = {

  [Actions.player.addPlayer]: {
    next: (state, action) => {
      return newState(state, {
        player: newState(action.payload, {isEdit: false}),
      })
    },

    throw: (state, action) => {
      return newState(state, {
        errors: action.payload.messages
      })
    }
  },

  [Actions.player.showPlayer]: {
    next: (state, action) => {
      return newState(state, {
        player: newState(action.payload, {isEdit: false}),
      })
    },

    throw: (state, action) => {
      return newState(state, {
        errors: action.payload.messages
      })
    }
  },

  [Actions.player.editPlayer]: {
    next: (state, action) => {
      return newState(state, {
        player: newState(action.payload, {isEdit: false}),
      })
    },

    throw: (state, action) => {
      return newState(state, {
        errors: action.payload.messages
      })
    }
  },

  [Actions.player.deletePlayer]: {
    next: (state, action) => {
      return newState(state, {
        players: state.players.filter(g => g.id != action.payload) 
      })
    },

    throw: (state, action) => {
      return newState(state, {
        errors: action.payload.messages
      })
    }
  },

  [Actions.player.toggleEdit]:
    (state, action) => {
      return newState(state, {
        player: newState(state, {isEdit: !state.isEdit})
      })
    }
}

export default handleActions(playerReducer, playerInitial)
