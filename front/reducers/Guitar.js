import { handleActions }   from 'redux-actions'
import Actions             from '../constants/Actions'

const newState = (state, data) => Object.assign({}, state, data)

const guitarInitial = {
  isFetching: false,
  isModalOpen: false,
  selectedMaker: '',
  guitars: [],
  guitar: { isEdit: false }
}

const mergeGuitars = (state, action) => {
  return newState(state, {
    guitars: _.union(state.guitars, action.payload.result),
    guitar: newState(state.guitar, {isEdit: false})
  })
}

const guitarReducer = {
  [Actions.guitar.merge]: mergeGuitars,

  [Actions.guitar.edit]: mergeGuitars,

  [Actions.guitar.delete]: 
    (state, action) => {
      return newState(state, {
        guitars: state.guitars.filter(id => id != action.payload),
      })
    },

  [Actions.guitar.show]:
    (state, action) => {
      return newState(state, {
        guitar: newState(state.guitar, { entityId: action.payload })
      })
    },

  [Actions.guitar.toggleEdit]:
    (state, action) => {
      return newState(state, {
        guitar: newState(state.guitar, {isEdit: !state.guitar.isEdit})
      })
    },

  [Actions.guitar.toggleFetching]: 
    (state, action) => newState(state, { isFetching: !state.isFetching }),

  [Actions.guitar.toggleModal]: 
    (state, action) => newState(state, { isModalOpen: !state.isModalOpen }),

  [Actions.guitar.selectMaker]:
    (state, action) => newState(state, { selectedMaker: action.payload.selectedMaker }),

  [Actions.guitar.error]: 
    (state, action) => {
      return newState(state, { errors: action.payload.messages })
    }
}

export default handleActions(guitarReducer, guitarInitial)
