import axios from "axios";
import {  FETCH_USERS, LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from "./types";

import { USER_SERVER } from "../components/views/Modelo de Seguridad/Config.js";

export const fetchUsers = () => (dispatch) => {
  fetch("http://localhost:5000/api/User/")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_USERS, payload: data });
    });
};

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get(`${USER_SERVER}/auth`)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
