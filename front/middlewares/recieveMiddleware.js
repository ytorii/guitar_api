import { recieveGuitar } from '../actions/Guitar'

const recieveMiddleware = store => next => action => {
  if(/GUITAR_API$/.test(action.type)){
    store.dispatch(recieveGuitar())
  }

  next(action)
}

export default recieveMiddleware
