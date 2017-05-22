import { handleActions } from 'redux-actions'
import _                 from 'lodash'
import Actions           from '../../constants/Actions'
import Guitar            from '../../models/Guitar'

const newState = (state, data) => Object.assign({}, state, data)

const guitarInitial = { guitars: {} }

const mergeGuitar = (state, action) => {
  const guitars = action.payload.entities.guitars
  return newState(state, {
    guitars: _.merge({}, state.guitars, _.mapValues(guitars, g => new Guitar(g)))
  })
}

const errorState = (state, action) => {
  return newState(state, {
    errors: action.payload.messages
  })
}

const guitarReducer = {

  [Actions.guitar.merge]: {
    next: mergeGuitar,
    throw: errorState
  },

  [Actions.guitar.edit]: {
    next: mergeGuitar,
    throw: errorState
  },

  [Actions.guitar.delete]: {
    next: (state, action) => {
      return newState(state, {
        guitars: _.pickBy(state.guitars, ( g => {
          return g.id != action.payload
        }))
      })
    },

    throw: errorState
  }
}

export default handleActions(guitarReducer, guitarInitial)
