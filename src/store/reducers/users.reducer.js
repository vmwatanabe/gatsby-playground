import {
  GET_USERS,
  SUCCESS_GET_USERS,
  ERROR_GET_USERS,
  GET_USER_BY_ID,
  SUCCESS_GET_USER_BY_ID,
  ERROR_GET_USER_BY_ID
} from '../constants';

const initialState = {
  users: null,
  currentUser: null,

  loading: false,
  error: false,

  loadingUser: false,
  errorUser: false
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
      return {
        ...state,
        users: action.data,
        loading: false
      };
    case ERROR_GET_USERS:
      return {
        ...state,
        users: initialState.users,
        loading: false,
        error: false
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        loadingUser: true,
        errorUser: false
      };
    case SUCCESS_GET_USER_BY_ID:
      return {
        ...state,
        currentUser: action.data,
        loadingUser: false
      };
    case ERROR_GET_USER_BY_ID:
      return {
        ...state,
        currentUser: initialState.currentUser,
        loadingUser: false,
        errorUser: false
      };
    default:
      return state;
  }
};

export default UsersReducer;
