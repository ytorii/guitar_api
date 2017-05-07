import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import requestMiddleware from './middlwares/requestMiddleware'

const middlwares = [ thunk, requestMiddleware ]

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlwares),
  )
}

export default configureStore
