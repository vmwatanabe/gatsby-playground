import { combineReducers } from 'redux';

import UsersReducer from '../reducers/users.reducer';

const Reducers = combineReducers({
  users: UsersReducer
});

export default Reducers;
