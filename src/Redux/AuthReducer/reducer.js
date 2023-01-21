import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNIN_SUCCESS } from "./actionTypes";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};

export { reducer };
