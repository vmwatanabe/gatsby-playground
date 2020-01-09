import { GET_USERS, SUCCESS_GET_USERS, ERROR_GET_USERS } from '../constants';

const initialState = {
  users: null,
  info: 'info',
  loading: false,
  error: false
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
        error: false
      };
    case SUCCESS_GET_USERS:
      console.log('sucesso', action);
      return {
        ...state,
        users: action.data,
        loading: false
      };
    case ERROR_GET_USERS:
      console.log('error', action);
      return {
        ...state,
        users: initialState.users,
        loading: false,
        error: false
      };
    default:
      return state;
  }
};

export default UsersReducer;
