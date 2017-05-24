import { PropTypes } from 'react';
import { Record } from 'immutable';

const VoteRecord = Record({
  id: 0,
  guitar_id: 0,
  user_id: 0,
  amount: 0
})

export const VoteType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  guitar_id: PropTypes.number.isRequired,
  user_id: PropTypes.number.isRequired,
  amount: PropTypes.number
})

export default class Vote extends VoteRecord {
}
