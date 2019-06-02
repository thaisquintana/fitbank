import { all, takeLatest } from 'redux-saga/effects'

import { getList } from './charList'
import { CharListTypes } from '../ducks/charList'

export default function* rootSaga() {
  yield all([takeLatest(CharListTypes.CHAR_LIST_REQUEST, getList)])
}
