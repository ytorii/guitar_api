import { recieveGuitar } from '../actions/Guitar'

const recieveMiddleware = store => next => action => {
  if(/API$/.test(action.type)){
    store.dispatch(recieveGuitar())
  }

  next(action)
}

export default recieveMiddleware
