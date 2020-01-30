import { takeLatest, put } from 'redux-saga/effects';

import {
  GET_USER_BY_ID,
  SUCCESS_GET_USER_BY_ID,
  ERROR_GET_USER_BY_ID
} from '../../constants';

import UsersService from '../../../services/Users.service';

function* getUserById({ id }) {
  try {
    const user = yield UsersService.getById(id);

    yield put({
      type: SUCCESS_GET_USER_BY_ID,
      data: user[0]
    });
  } catch (error) {
    yield put({ type: ERROR_GET_USER_BY_ID, error });
  }
}

function* getUserByIdSagas() {
  yield takeLatest(GET_USER_BY_ID, getUserById);
}

export default getUserByIdSagas;
