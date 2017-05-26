import { handleActions } from 'redux-actions'
import _                 from 'lodash'
import Actions           from '../../constants/Actions'
import GuitarsList       from '../../models/GuitarsList'

const guitarInitial = new GuitarsList()

const guitarReducer = {
  [Actions.guitar.merge]:
    (state, action) => state.mergeGuitars(action.payload.entities.guitars),
  [Actions.guitar.delete]:
    (state, action) => state.deleteGuitar(action.payload)
}

export default handleActions(guitarReducer, guitarInitial)
