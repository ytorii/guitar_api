import { toggleUserSending }    from '../actions/User'
import { toggleGuitarFetching } from '../actions/Guitar'
import { toggleGuitarSending } from '../actions/Guitar'
import { togglePlayerSending }  from '../actions/Player'

const recieveMiddleware = store => next => action => {
  if(/USER_API$/.test(action.type)){
    store.dispatch(toggleUserSending())
  } else if(/EDIT_GUITAR_API/.test(action.type)){
    store.dispatch(toggleGuitarSending())
  } else if(/GUITAR_API$/.test(action.type)){
    store.dispatch(toggleGuitarFetching())
  } else if(/PLAYER_API$/.test(action.type)){
    store.dispatch(togglePlayerSending())
  }

  next(action)
}

export default recieveMiddleware
