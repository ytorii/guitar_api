import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { requestGuitar } from './actions/Guitar'
import { requestUser } from './actions/User'
import rootReducer from './reducers/index'

const requestMiddleware = store => next => action => {
  if(/GUITAR/.test(action.type)){
    store.dispatch(requestGuitar())
  } else if(/SIGN/.test(action.type)){
    store.dispatch(requestUser())
  }
  next(action)
}

const logMiddleware = store => next => action => {
  console.log(action)
  next(action)
}

const middlwares = [ thunk, requestMiddleware, logMiddleware ]

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlwares),
  )
}

export default configureStore
