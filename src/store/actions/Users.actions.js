import { GET_USERS, GET_USER_BY_ID } from '../constants';

export function getUsers() {
  return { type: GET_USERS };
}

export function getUserById(id) {
  return { type: GET_USER_BY_ID, id };
}
