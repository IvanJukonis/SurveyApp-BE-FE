import {
  FETCH_SINIESTROS,
  ADD_SINIESTRO,
  DELETE_SINIESTRO,
} from "./types";
import axios from "axios";

export const fetchSiniestros = () => (dispatch) => {
  fetch("http://localhost:5000/api/Siniestro/")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_SINIESTROS, payload: data });
    });
};


export function addSiniestro(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addSiniestro`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_SINIESTRO,
    payload: request,
  };
}

export const deleteSiniestros = (code) => {
  return (dispatch) => {
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`http://localhost:5000/api/siniestro/${code}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log("DELETE SINIESTRO", data);
        if (!Object.entries(data).length) {
          return Promise.reject(data);
        }

        return dispatch({
          type: DELETE_SINIESTRO,
          payload: data,
        });
      });
  };
};
