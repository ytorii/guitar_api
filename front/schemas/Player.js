import { schema } from 'normalizr'
import Player     from '../models/Player'

const PlayerSchema = new schema.Entity('players')

export default PlayerSchema
