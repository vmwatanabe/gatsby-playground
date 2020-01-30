import { all } from 'redux-saga/effects';

import getUsers from './getUsers';
import getUserById from './getUserById';

export default function* rootSaga() {
  yield all([getUsers(), getUserById()]);
}
