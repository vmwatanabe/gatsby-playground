import { takeLatest, put } from 'redux-saga/effects';

import { GET_USERS, SUCCESS_GET_USERS, ERROR_GET_USERS } from '../../constants';

import UsersService from '../../../services/Users.service';

function* getUsers(action) {
  try {
    const users = yield UsersService.getAll(action.params);

    yield put({
      type: SUCCESS_GET_USERS,
      data: users
    });
  } catch (error) {
    yield put({ type: ERROR_GET_USERS, error });
  }
}

function* getUsersSagas() {
  yield takeLatest(GET_USERS, getUsers);
}

export default getUsersSagas;
