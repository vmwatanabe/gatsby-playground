import { all } from 'redux-saga/effects';

import getUsers from './getUsers';

export default function* rootSaga() {
  yield all([getUsers()]);
}
