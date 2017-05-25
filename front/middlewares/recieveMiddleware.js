import { toggleUserSending }              from '../actions/User'
import { toggleProp as toggleGuitarProp } from '../actions/Guitar'
import { togglePlayerSending }            from '../actions/Player'

const recieveMiddleware = store => next => action => {
  if(/USER_API$/.test(action.type)){
    store.dispatch(toggleUserSending())
  } else if(/GUITAR_API$/.test(action.type)){
    store.dispatch(toggleGuitarProp('isFetching'))
  } else if(/PLAYER_API$/.test(action.type)){
    store.dispatch(togglePlayerSending())
  }

  next(action)
}

export default recieveMiddleware
