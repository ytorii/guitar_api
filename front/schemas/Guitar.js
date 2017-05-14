import { schema } from 'normalizr'
import Guitar     from '../models/Guitar'

const GuitarSchema = new schema.Entity('guitars')

//const player = new schema.Entity('players')
//GuitarSchema.define({ players: player })

export default GuitarSchema
