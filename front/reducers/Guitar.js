import { handleActions }   from 'redux-actions'
import Actions             from '../constants/Actions'
import GuitarView          from '../models/GuitarView'

const guitarInitial = new GuitarView()

const guitarReducer = {
  [Actions.guitar.merge]:
    (state, action) => state.mergeGuitars(action.payload.result),

  [Actions.guitar.delete]:
    (state, action) => state.deleteGuitars(action.payload),

  [Actions.guitar.show]:
    (state, action) => state.set('guitar', action.payload),

  [Actions.guitar.toggleProp]:
    (state, action) => state.toggleProp(action.payload),

  [Actions.guitar.error]: 
    (state, action) => state.set('errors', action.payload.messages)
}

export default handleActions(guitarReducer, guitarInitial)
