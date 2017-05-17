import { handleActions }   from 'redux-actions'
import _                   from 'lodash'
import Actions             from '../../constants/Actions'
import Guitar              from '../../models/Guitar'

const newState = (state, data) => Object.assign({}, state, data)

const guitarInitial = {
  guitars: {} 
}

const guitarReducer = {

  [Actions.guitar.merge]: {
    next: (state, action) => {
      const guitars = action.payload.entities.guitars
      return newState(state, {
        guitars: _.merge({}, state.guitars, _.mapValues(guitars, g => new Guitar(g)))
      })
    },

    throw: (state, action) => {
      return newState(state, {
        errors: action.payload.messages
      })
    }
  },

  [Actions.guitar.delete]: {
    next: (state, action) => {
      return newState(state, {
        guitars: _.pickBy(state.guitars, ( g => {
          return g.id != action.payload
        }))
      })
    },

    throw: (state, action) => {
      return newState(state, {
        errors: action.payload.messages
      })
    }
  }
}

export default handleActions(guitarReducer, guitarInitial)
