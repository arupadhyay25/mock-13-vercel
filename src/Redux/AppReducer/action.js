import axios from "axios";
import {
  GET_DOGS_DATA_FAILURE,
  GET_DOGS_DATA_REQUEST,
  GET_DOGS_DATA_SUCCESS,
} from "./actionType";

export let getDogsDataRequest = () => {
  return {
    type: GET_DOGS_DATA_REQUEST,
  };
};
export let getDogsDataSuccess = (value) => {
  return {
    type: GET_DOGS_DATA_SUCCESS,
    payload: value,
  };
};
export let getDogsDataFailure = () => {
  return {
    type: GET_DOGS_DATA_FAILURE,
  };
};
export let postdogdata = (payload) => {
  return axios.post("https://masai-fake-jsonserver.onrender.com/dogs", payload);
};

export let getApiData = (queryparams) => (dispatch) => {
  dispatch(getDogsDataRequest());
  return axios
    .get("https://masai-fake-jsonserver.onrender.com/dogs", queryparams)
    .then((r) => dispatch(getDogsDataSuccess(r.data)))
    .catch((e) => dispatch(getDogsDataFailure()));
};
export let deleteitems = (id) => (dispatch) => {
  dispatch(getDogsDataRequest());
  return axios
    .delete(`https://masai-fake-jsonserver.onrender.com/dogs/${id}`)
};
