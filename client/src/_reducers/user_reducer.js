import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  FETCH_USERS,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSucces: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      return { ...state };
    default:
      return state;
  }
}
