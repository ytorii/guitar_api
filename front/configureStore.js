import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import requestMiddleware from './middlewares/requestMiddleware'
import recieveMiddleware from './middlewares/recieveMiddleware'

//const middlwares = [ thunk ]
const middlwares = [ thunk, recieveMiddleware ]

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlwares),
  )
}

export default configureStore
