import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import rootReducer from './reducers'
import rootReducer from './reducers/index'

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunk
    )
  )
}

export default configureStore
