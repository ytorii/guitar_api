import { handleActions }   from 'redux-actions'
import Actions             from '../constants/Actions'

const newState = (state, data) => Object.assign({}, state, data)

const guitarInitial = {
  isFetching: false,
  isModalOpen: false,
  selectedMaker: '',
  guitar: {},
  guitars: []
}

const guitarReducer = {

  [Actions.guitar.addGuitar]: {
    next: (state, action) => {
      return newState(state, {
        isFetching: false,
        guitars: [...state.guitars, action.payload ]
      })
    },

    throw: (state, action) => {
      return newState(state, {
        isFetching: false,
        errors: action.payload.messages
      })
    }
  },

  [Actions.guitar.showGuitar]: {
    next: (state, action) => {
      return newState(state, {
        isFetching: false,
        guitar: action.payload
      })
    },

    throw: (state, action) => {
      return newState(state, {
        isFetching: false,
        errors: action.payload.messages
      })
    }
  },

  [Actions.guitar.editGuitar]: {
    next: (state, action) => {
      return newState(state, {
        isFetching: false,
        guitars: state.guitars.map( g => {
          return g.id == action.payload.id ? action.payload : g
        })
      })
    },

    throw: (state, action) => {
      return newState(state, {
        isFetching: false,
        errors: action.payload.messages
      })
    }
  },

  [Actions.guitar.deleteGuitar]: {
    next: (state, action) => {
      return newState(state, {
        isFetching: false,
        guitars: state.guitars.filter(g => g.id != action.payload) 
      })
    },

    throw: (state, action) => {
      return newState(state, {
        isFetching: false,
        errors: action.payload.messages
      })
    }
  },

  [Actions.guitar.requestList]:
    (state, action) => {
      return newState(state, {
        isFetching: true
      })
    },

  [Actions.guitar.createList]: {
    next: (state, action) => {
      return newState(state, {
        isFetching: false,
        guitars: action.payload
      })
    },

    throw: (state, action) => {
      return newState(state, {
        isFetching: false,
        errors: action.payload.messages
      })
    }
  },

  [Actions.guitar.selectMaker]:
    (state, action) => {
      return newState(state, {
        selectedMaker: action.payload.selectedMaker
      })
    },

  [Actions.guitar.toggleEdit]:
    (state, action) => {
      return newState(state, {
        guitars: state.guitars.map( g => {
          if(g.id == action.payload.id){
            g.isEdit = !g.isEdit
          }
          return g
        })
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
