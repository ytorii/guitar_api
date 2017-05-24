import { handleActions } from 'redux-actions'
import _                 from 'lodash'
import Actions           from '../../constants/Actions'
import GuitarModel       from '../../models/Guitar'

const newState = (state, data) => Object.assign({}, state, data)

const guitarInitial = { guitars: {} }

const mergeGuitar = (state, action) => {
  const guitars = action.payload.entities.guitars
  return newState(state, {
    guitars: _.merge({},
      state.guitars,
      _.mapValues(guitars, g => new GuitarModel(g))
    )
  })
}

const deleteGuitar = (state, action) => {
  return newState(state, {
    guitars: _.pickBy(state.guitars,
      g => g.id != action.payload )
  })
}

const guitarReducer = {
  [Actions.guitar.merge]: { next: mergeGuitar },
  [Actions.guitar.edit]: { next: mergeGuitar },
  [Actions.guitar.delete]: { next: deleteGuitar }
}

export default handleActions(guitarReducer, guitarInitial)
