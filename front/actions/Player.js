import { createAction }  from 'redux-actions'
import { requestGuitar } from './Guitar'
import Actions           from '../constants/Actions'
import * as PlayerAPI    from '../api/Player'
import ActionDispatch    from '../utils/ActionDispatch'
import PlayerSchema      from '../schemas/Player'

const schema = [ PlayerSchema ]

// After add new player, rerenders whole the guitar.
export const addPlayer = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.player.merge),
    PlayerAPI.add(params), [ requestGuitar ], schema)
}
