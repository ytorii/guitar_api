import { schema } from 'normalizr'
import Guitar     from '../models/Guitar'

const player = new schema.Entity('players')

const GuitarSchema = new schema.Entity('guitars', {
  players: [ player ]
})

export default GuitarSchema
