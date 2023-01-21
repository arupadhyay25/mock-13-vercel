import {
  GET_DOGS_DATA_FAILURE,
  GET_DOGS_DATA_REQUEST,
  GET_DOGS_DATA_SUCCESS,
} from "./actionType";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  dogs: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DOGS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        dogs: action.payload,
      };
    case GET_DOGS_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
