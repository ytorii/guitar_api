import { PropTypes } from 'react';
import { Record } from 'immutable';

const PlayerRecord = Record({
  id: 0,
  guitar_id: 0,
  name: '',
  group: '',
  votes_count: 0,
  vote_id: null 
});

export const PlayerType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  guitar_id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  votes_count: PropTypes.number.isRequired,
  vote_id: PropTypes.number
})

export default class Player extends PlayerRecord {}
