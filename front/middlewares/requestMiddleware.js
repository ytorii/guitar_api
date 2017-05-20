import { requestGuitar }     from '../actions/Guitar'
import { toggleUserSending } from '../actions/User'

const requestMiddleware = store => next => action => {
  if(/GUITAR_API$/.test(action.type)){
    store.dispatch(requestGuitar())
  } else if(/USER_API$/.test(action.type)){
    store.dispatch(toggleUserSending())
  }

  next(action)
}

export default requestMiddleware
