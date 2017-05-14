import { PropTypes } from 'react';
import { Record } from 'immutable';

const GuitarRecord = Record({
  id: 0,
  name: '',
  maker: '',
  isEdit: false
})

export const GuitarType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
})

export default class Guitar extends GuitarRecord {
  isEdit(){
    return this.isEdit
  }
}
