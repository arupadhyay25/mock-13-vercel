//Write the ActionCreator functions here

import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNIN_SUCCESS } from "./actionTypes";

export let postloginrequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
export let postloginsuccess = (value) => {
  return {
    type: LOGIN_SUCCESS,
    payload: value,
  };
};
export let postsigninsuccess = () => {
  return {
    type: SIGNIN_SUCCESS,
  };
};
export let login = (payload) => (dispatch) => {
  dispatch(postloginrequest());
  return axios
    .post("https://rich-erin-nematode-shoe.cyclic.app/login", payload)
    .then((response) => {
      if (response.data.token.length > 0) {
        return dispatch(postloginsuccess(response.data.Userdata[0]));
      }
    })
    .catch((e) => {
      alert("Wrong credentials");
      return dispatch(postloginfailure());
    });
};
export let signup = (payload) => (dispatch) => {
  dispatch(postloginrequest());
  return axios
    .post("https://rich-erin-nematode-shoe.cyclic.app/signup", payload)
    .then((response) => {
      console.log(response)
        alert("Succes Now login !!")
        return dispatch(postloginsuccess());
    })
    .catch((e) => {
      alert("Wrong credentials");
      return dispatch(postloginfailure());
    });
};
export let postloginfailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};
