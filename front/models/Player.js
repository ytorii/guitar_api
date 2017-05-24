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

export default class PlayerModel extends PlayerRecord {}
