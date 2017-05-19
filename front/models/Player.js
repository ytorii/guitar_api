import { PropTypes } from 'react';
import { Record } from 'immutable';

const PlayerRecord = Record({
  id: 0,
  guitar_id: 0,
  name: '',
  group: '',
  votes_count: 0,
  user_voted: false 
});

export const PlayerType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  guitar_id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  votes_count: PropTypes.number.isRequired,
  user_voted: PropTypes.bool.isRequired
})

export default class Player extends PlayerRecord {}
