import { handleActions }   from 'redux-actions'
import Actions             from '../constants/Actions'

const newState = (state, data) => Object.assign({}, state, data)

const guitarInitial = {
  isFetching: false,
  isModalOpen: false,
  selectedMaker: '',
  guitars: [],
  guitar: {},
  players: []
}

const guitarReducer = {

  [Actions.guitar.addGuitar]: {
    next: (state, action) => {
      return newState(state, {
        guitars: [...state.guitars, action.payload ]
      })
    },

    throw: (state, action) => {
      return newState(state, {
        errors: action.payload.messages
      })
    }
  },

  [Actions.guitar.showGuitar]: {
    next: (state, action) => {
      return newState(state, {
        guitar: newState(action.payload, {isEdit: false}),
        players: action.payload.players
      })
    },

    throw: (state, action) => {
      return newState(state, {
        errors: action.payload.messages
      })
    }
  },

  [Actions.guitar.editGuitar]: {
    next: (state, action) => {
      return newState(state, {
        guitar: newState(action.payload, {isEdit: false}),
        guitars: state.guitars.map( g => {
          return g.id == action.payload.id ? action.payload : g
        })
      })
    },

    throw: (state, action) => {
      return newState(state, {
        errors: action.payload.messages
      })
    }
  },

  [Actions.guitar.deleteGuitar]: {
    next: (state, action) => {
      return newState(state, {
        guitars: state.guitars.filter(g => g.id != action.payload) 
      })
    },

    throw: (state, action) => {
      return newState(state, {
        errors: action.payload.messages
      })
    }
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

  [Actions.guitar.createList]: {
    next: (state, action) => {
      return newState(state, {
        guitars: action.payload
      })
    },

    throw: (state, action) => {
      return newState(state, {
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
