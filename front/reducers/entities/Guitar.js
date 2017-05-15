import { handleActions }   from 'redux-actions'
import _                   from 'lodash'
import Actions             from '../../constants/Actions'
import Guitar              from '../../models/Guitar'

const newState = (state, data) => Object.assign({}, state, data)

const guitarInitial = {
  guitars: {} 
}

const guitarReducer = {
//
//  [Actions.guitar.add]: {
//    next: (state, action) => {
//      return newState(state, {
//        guitars: [...state.guitars, action.payload ]
//      })
//    },
//
//    throw: (state, action) => {
//      return newState(state, {
//        errors: action.payload.messages
//      })
//    }
//  },
//
//  [Actions.guitar.show]: {
//    next: (state, action) => {
//      return newState(state, {
//        guitar: newState(action.payload, {isEdit: false}),
//      })
//    },
//
//    throw: (state, action) => {
//      return newState(state, {
//        errors: action.payload.messages
//      })
//    }
//  },
//
  [Actions.guitar.edit]: {
    next: (state, action) => {
      return newState(state, {
        guitars: _.mapValues(state.guitars, ( g => {
          return g.id == action.payload.id ? new Guitar(action.payload) : g
        }))
      })
    },

    throw: (state, action) => {
      return newState(state, {
        errors: action.payload.messages
      })
    }
  },

  [Actions.guitar.delete]: {
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

//  [Actions.player.add]: {
//    next: (state, action) => {
//      return newState(state, {
//        guitar: newState(state.guitar, {
//          players: [ ...state.guitar.players, action.payload ]
//        })
//      })
//    },
//
//    throw: (state, action) => {
//      return newState(state, {
//        errors: action.payload.messages
//      })
//    }
//  },
//
//  [Actions.vote.add]: {
//    next: (state, action) => {
//      return newState(state, {
//        guitar: newState(state.guitar, {
//          players: state.guitar.players.map( p => {
//            if(p.id === action.payload.player_id){
//              p.user_voted = true
//              p.votes_count++
//            }
//            return p
//          })
//        })
//      })
//    },
//
//    throw: (state, action) => {
//      return newState(state, {
//        errors: action.payload.messages
//      })
//    }
//  },
//
//  [Actions.guitar.requestGuitar]:
//    (state, action) => {
//      return newState(state, {
//        isFetching: true
//      })
//    },
//
//  [Actions.guitar.recieveGuitar]:
//    (state, action) => {
//      return newState(state, {
//        isFetching: false
//      })
//    },
//
  [Actions.guitar.createList]: {
    next: (state, action) => {
      const guitars = action.payload.entities.guitars
      return newState(state, {
        guitars: _.mapValues(guitars, g => new Guitar(g))
      })
    },

    throw: (state, action) => {
      return newState(state, {
        errors: action.payload.messages
      })
    }
  }
//  },
//
//  [Actions.guitar.selectMaker]:
//    (state, action) => {
//      return newState(state, {
//        selectedMaker: action.payload.selectedMaker
//      })
//    },
//
//  [Actions.guitar.toggleEdit]:
//    (state, action) => {
//      return newState(state, {
//        guitar: newState(state.guitar, {isEdit: !state.guitar.isEdit})
//      })
//    },
//
//  [Actions.guitar.toggleModal]: 
//    (state, action) => {
//      return newState(state, {
//        //isFetching: false,
//        //guitar: state.isModalOpen ? {} : state.guitar,
//        isModalOpen: !state.isModalOpen
//      })
//    }
}

export default handleActions(guitarReducer, guitarInitial)
