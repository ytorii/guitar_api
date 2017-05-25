import { handleActions }   from 'redux-actions'
import Actions             from '../constants/Actions'
import GuitarView          from '../models/GuitarView'
import _                   from 'lodash'

const guitarInitial = new GuitarView()

const mergeGuitars = (state, action) => {
  return state
    .set('guitars', _.union(state.guitars, action.payload.result))
    .set('isEdit', false)
}

const guitarReducer = {
  [Actions.guitar.merge]: mergeGuitars,

  [Actions.guitar.delete]: 
    (state, action) => {
      return state
        .set('guitars', state.guitars.filter(id => id != action.payload))
    },

  [Actions.guitar.show]:
    (state, action) => state.set('guitar', action.payload),

  [Actions.guitar.toggleProp]:
    (state, action) => action.payload,

  [Actions.guitar.toggleEdit]:
    (state, action) => state.toggleProp('isEdit'),

  [Actions.guitar.toggleFetching]: 
    (state, action) => state.toggleProp('isFetching'),

  [Actions.guitar.toggleModal]: 
    (state, action) => state.toggleProp('isModalOpen'),

  [Actions.guitar.error]: 
    (state, action) => state.set('errors', action.payload.messages)
}

export default handleActions(guitarReducer, guitarInitial)
