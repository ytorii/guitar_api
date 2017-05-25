import { PropTypes } from 'react';
import { Record } from 'immutable';

const GuitarViewRecord = Record({
  guitar: 0,
  guitars: [],
  isEdit: false,
  isFetching: false,
  isModalOpen: false,
  selectedMaker: '',
  errors: []
})

export default class GuitarViewModel extends GuitarViewRecord {
  toggleProp(prop){
    return this.set(prop, !this[prop])
  }
}
