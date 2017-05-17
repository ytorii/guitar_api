import { PropTypes } from 'react';
import { Record } from 'immutable';

const GuitarRecord = Record({
  id: 0,
  name: '',
  maker: '',
  players: []
})

const GuitarType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.number).isRequired,
})

export default class Guitar extends GuitarRecord {}
