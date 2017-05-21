import { handleActions }   from 'redux-actions'
import Actions             from '../constants/Actions'

const newState = (state, data) => Object.assign({}, state, data)

const guitarInitial = {
  isFetching: false,
  isModalOpen: false,
  selectedMaker: '',
  guitars: [],
  guitar: {isEdit: false}
}

const guitarReducer = {
  [Actions.guitar.merge]: {
    next: (state, action) => {
      return newState(state, {
        guitars: _.union(state.guitars, action.payload.result),
        guitar: newState(state.guitar, {isEdit: false})
      })
    }
  },

  [Actions.guitar.delete]: {
    next: (state, action) => {
      return newState(state, {
        guitars: state.guitars.filter(id => id != action.payload),
      })
    }
  },

  [Actions.guitar.show]:
    (state, action) => {
      return newState(state, {
        guitar: newState(state.guitar, { entityId: action.payload })
      })
    },

  [Actions.guitar.toggleFetching]:
    (state, action) => {
      return newState(state, {
        isFetching: !state.isFetching
      })
    },

  [Actions.guitar.selectMaker]:
    (state, action) => {
      return newState(state, {
        selectedMaker: action.payload.selectedMaker
      })
    },

  [Actions.guitar.toggleEdit]:
    (state, action) => {
      console.log(
        { ...state, 
          guitar: { ...state.guitar,
            isEdit: !state.guitar.isEdit
          }
        }
      )
      return newState(state, {
        guitar: newState(state.guitar, {isEdit: !state.guitar.isEdit})
      })
    },

  [Actions.guitar.toggleModal]: 
    (state, action) => {
      return newState(state, {
        isModalOpen: !state.isModalOpen
      })
    }
}

export default handleActions(guitarReducer, guitarInitial)
