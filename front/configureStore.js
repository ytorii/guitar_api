import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import reloadGuitarsMiddleware from './middlewares/reloadGuitarsMiddleware'
import recieveMiddleware from './middlewares/recieveMiddleware'

//const middlwares = [ thunk ]
const middlwares = [
  thunk,
  recieveMiddleware,
  reloadGuitarsMiddleware
]

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlwares),
  )
}

export default configureStore
