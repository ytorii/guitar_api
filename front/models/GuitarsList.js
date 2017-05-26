import { Record, Map } from 'immutable'
import GuitarModel     from './Guitar'
import _               from 'lodash'

export const GuitarsListRecord = Record({
  guitars: {}
})

export default class GuitarsList extends GuitarsListRecord {
  mergeGuitars(guitars){
    return this
      .set('guitars', _.merge({}, this.guitars, 
         _.mapValues(guitars, g => new GuitarModel(g))
      ))
  }

  deleteGuitar(entityId) {
    return this
      .set('guitars', _.pickBy(this.guitars, g => g.id != entityId ))
  }
}
