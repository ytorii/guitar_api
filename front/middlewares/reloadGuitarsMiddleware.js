import { fetchGuitars } from '../actions/Guitar'

const reloadGutiarsMiddleware = store => next => action => {
  if(/^SIGN/.test(action.type)){
    store.dispatch(fetchGuitars())
  }

  next(action)
}

export default reloadGutiarsMiddleware
