import {
  FETCH_ASEGURADOS,
  ADD_ASEGURADO,
  DELETE_ASEGURADO,
} from "./types";
import axios from "axios";

export const fetchasegurados = () => (dispatch) => {
  fetch("http://localhost:5000/api/Asegurado/")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_ASEGURADOS, payload: data });
    });
};


export function addAsegurado(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addAsegurado`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_ASEGURADO,
    payload: request,
  };
}

export const deleteasegurados = (code) => {
  return (dispatch) => {
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`http://localhost:5000/api/asegurado/${code}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log("DELETE ASEGURADO", data);
        if (!Object.entries(data).length) {
          return Promise.reject(data);
        }

        return dispatch({
          type: DELETE_ASEGURADO,
          payload: data,
        });
      });
  };
};
