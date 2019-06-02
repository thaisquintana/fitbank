import { call, put } from 'redux-saga/effects'
import api from '../../services/api'

import CharactersActions from '../ducks/characters'

const apikey =
  '?ts=1&apikey=ecad66e69136d9707d28cae15fad6ea6&hash=8537e80e7d1fc4b4a7c116796d34af46'

export function* getCharList(data) {
  const response = yield call(api.get, `characters${apikey}`)

  console.log('aqui', response.data.data.results)

  yield put(CharactersActions.charListSuccess(response.data))
}
