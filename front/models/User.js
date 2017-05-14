import { PropTypes } from 'react';
import { Record } from 'immutable';

const UserRecord = Record({
  id: 0,
  email: '',
  image: null,
  name: '',
  nickname: '',
  provider: '',
  uid: ''
})

export default class User extends UserRecord {
  getId(){
    return this.id
  }
}
