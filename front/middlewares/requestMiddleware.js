import { requestGuitar } from '../actions/Guitar'
import { requestUser } from '../actions/User'

const requestMiddleware = store => next => action => {
  if(/GUITAR/.test(action.type)){
    console.log(action)
    store.dispatch(requestGuitar())
  } else if(/SIGN/.test(action.type)){
    store.dispatch(requestUser())
  }
  next(action)
}

export default requestMiddleware
