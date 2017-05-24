import { PropTypes } from 'react';
import { Record } from 'immutable';

const GuitarRecord = Record({
  id: 0,
  name: '',
  maker: ''
})

export default class GuitarModel extends GuitarRecord {}
