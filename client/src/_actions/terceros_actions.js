import {
  FETCH_TERCEROS,
  ADD_TERCERO,
  DELETE_TERCERO,
} from "./types";
import axios from "axios";

export const fetchTerceros = () => (dispatch) => {
  fetch("http://localhost:5000/api/Tercero/")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_TERCEROS, payload: data });
    });
};


export function addTercero(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addTercero`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_TERCERO,
    payload: request,
  };
}

export const deleteTerceros = (code) => {
  return (dispatch) => {
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`http://localhost:5000/api/tercero/${code}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log("DELETE TERCERO", data);
        if (!Object.entries(data).length) {
          return Promise.reject(data);
        }

        return dispatch({
          type: DELETE_TERCERO,
          payload: data,
        });
      });
  };
};
