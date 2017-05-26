import { Record } from 'immutable'
import _          from 'lodash'

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
  mergeGuitars(guitars){
    return this
      .set('guitars', _.union(this.guitars, guitars))
      .set('isEdit', false)
  }

  deleteGuitar(entityId){
    return this
      .set('guitars', this.guitars.filter(id => id != entityId))
      .set('isModalOpen', false)
  }

  toggleProp(prop){
    return this.set(prop, !this[prop])
  }
}
