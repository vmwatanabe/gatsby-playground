import { all, fork } from 'redux-saga/effects';

import * as usersSagas from './usersSagas';

export default function* rootSaga() {
  yield all([...Object.values(usersSagas)].map(fork));
}
