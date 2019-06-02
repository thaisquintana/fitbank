import { all, takeLatest } from 'redux-saga/effects'

import { getCharList } from './characters'
import { CharactersTypes } from '../ducks/characters'

export default function* rootSaga() {
  yield all([takeLatest(CharactersTypes.CHARACTERS_REQUEST, getCharList)])
}
