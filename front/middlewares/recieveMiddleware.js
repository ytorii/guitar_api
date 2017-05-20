import { toggleGuitarFetching } from '../actions/Guitar'
import { toggleUserSending }   from '../actions/User'

const recieveMiddleware = store => next => action => {
  if(/GUITAR_API$/.test(action.type)){
    store.dispatch(toggleGuitarFetching())
  } else if(/USER_API$/.test(action.type)){
    store.dispatch(toggleUserSending())
  }

  next(action)
}

export default recieveMiddleware
