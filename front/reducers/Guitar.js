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
        isModalOpen: false
      })
    }
  },

  [Actions.guitar.show]:
    (state, action) => {
      return newState(state, {
        isModalOpen: true,
        guitar: newState(state.guitar, { entityId: action.payload })
      })
    },

  [Actions.guitar.requestGuitar]:
    (state, action) => {
      return newState(state, {
        isFetching: true
      })
    },

  [Actions.guitar.recieveGuitar]:
    (state, action) => {
      return newState(state, {
        isFetching: false
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
        //isFetching: false,
        //guitar: state.isModalOpen ? {} : state.guitar,
        isModalOpen: !state.isModalOpen
      })
    }
}

export default handleActions(guitarReducer, guitarInitial)
