import { createAction }  from 'redux-actions'
import { requestGuitar } from './Guitar'
import * as VoteAPI      from '../api/Vote'
import Actions           from '../constants/Actions'
import PlayerSchema      from '../schemas/Player'
import ActionDispatch    from '../utils/ActionDispatch'

const schema = [ PlayerSchema ]

export const addVote = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.player.merge),
    VoteAPI.add(params), [ requestGuitar ], schema)
}

export const deleteVote = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.player.merge),
    VoteAPI.del(params), [ requestGuitar ], schema)
}
