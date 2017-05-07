import { requestGuitar } from '../actions/Guitar'
import { requestUser } from '../actions/User'

const requestMiddleware = store => next => action => {
  //console.log(action)
  if(/GUITAR/.test(action.type)){
    store.dispatch(requestGuitar())
  } else if(/SIGN/.test(action.type)){
    store.dispatch(requestUser())
  }
  next(action)
}

export default requestMiddleware
