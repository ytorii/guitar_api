import { PropTypes } from 'react';
import { Record } from 'immutable';

const GuitarViewRecord = Record({
  isFetching: false,
  isModalOpen: false,
  selectedMaker: '',
  guitars: [],
  guitar: { isEdit: false }
})

export default class GuitarViewModel extends GuitarViewRecord {
  toggleProp(prop){
    console.log(this.[prop])
    return this.set(prop, !this.[prop])
  }
}
