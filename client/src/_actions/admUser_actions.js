import {
  FETCH_USERS,
  ADD_USER,
  DELETE_USER,
} from "./types";
import axios from "axios";

export const fetchUsers = () => (dispatch) => {
  fetch("http://localhost:5000/api/User/")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_USERS, payload: data });
    });
};


export function addUser(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addUser`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_USER,
    payload: request,
  };
}

export const deleteUsers = (code) => {
  return (dispatch) => {
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`http://localhost:5000/api/user/${code}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log("DELETE USER", data);
        if (!Object.entries(data).length) {
          return Promise.reject(data);
        }

        return dispatch({
          type: DELETE_USER,
          payload: data,
        });
      });
  };
};
