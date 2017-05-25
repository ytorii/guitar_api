import { createAction }        from 'redux-actions'
import { togglePlayerSending } from './Player'
import * as VoteAPI            from '../api/Vote'
import Actions                 from '../constants/Actions'
import PlayerSchema            from '../schemas/Player'
import ActionDispatch          from '../utils/ActionDispatch'

const schema = [ PlayerSchema ]
const errorAction = createAction(Actions.player.error)

export const addVote = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.player.merge),
    VoteAPI.add(params), togglePlayerSending(), schema, errorAction)
}

export const deleteVote = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.player.merge),
    VoteAPI.del(params), togglePlayerSending(), schema, errorAction)
}
