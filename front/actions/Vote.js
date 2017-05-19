import { createAction }  from 'redux-actions'
import { requestGuitar } from './Guitar'
import * as VoteAPI      from '../api/Vote'
import Actions           from '../constants/Actions'
import PlayerSchema      from '../schemas/Player'
import ActionDispatch    from '../utils/ActionDispatch'

const schema = [ PlayerSchema ]

// After add new vote, rerenders whole the guitar.
export const addVote = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.player.merge),
    VoteAPI.add(params), [ requestGuitar ], schema)
}
