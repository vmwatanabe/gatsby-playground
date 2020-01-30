import Http from './base';

import { BASE_URL } from './base/constants';

export const getAll = () => Http.get(`${BASE_URL}/users`);
export const getById = id =>
  Http.get(`${BASE_URL}/users`, {
    params: {
      id
    }
  });

export default {
  getAll,
  getById
};
