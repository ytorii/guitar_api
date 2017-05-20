import { createAction }  from 'redux-actions'
import { requestGuitar } from './Guitar'
import Actions           from '../constants/Actions'
import * as PlayerAPI    from '../api/Player'
import ActionDispatch    from '../utils/ActionDispatch'
import PlayerSchema      from '../schemas/Player'

const schema = [ PlayerSchema ]

export const addPlayer = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.player.merge),
    PlayerAPI.add(params), [ requestGuitar ], schema)
}

export const deletePlayer = (id) => {
  return ActionDispatch.executeApi(createAction(Actions.player.delete),
    PlayerAPI.del(id), [ requestGuitar ])
}
