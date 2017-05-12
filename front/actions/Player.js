import { createAction }  from 'redux-actions'
import Actions           from '../constants/Actions'
import * as PlayerAPI    from '../api/Player'
import { requestGuitar } from './Guitar'
import ActionDispatch    from '../utils/ActionDispatch'

// After add new player, rerenders whole the guitar.
export const addPlayer = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.player.add),
    PlayerAPI.add, params, [ requestGuitar ])
}
