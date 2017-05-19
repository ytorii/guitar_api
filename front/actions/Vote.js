import { createAction }  from 'redux-actions'
import { requestGuitar } from './Guitar'
import Actions           from '../constants/Actions'
import * as VoteAPI      from '../api/Vote'
import ActionDispatch    from '../utils/ActionDispatch'

// After add new vote, rerenders whole the guitar.
export const addVote = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.vote.add),
    VoteAPI.add(params), [ requestGuitar ])
}
