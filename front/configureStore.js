import { compose, applyMiddleware, createStore } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const configureStore = (preloadedState) => {
  const store =  createStore(
    rootReducer,
    preloadedState,
    compose (
      applyMiddleware(thunk),
      autoRehydrate()
    )
  )

  persistStore(store)

  return store
}

export default configureStore
