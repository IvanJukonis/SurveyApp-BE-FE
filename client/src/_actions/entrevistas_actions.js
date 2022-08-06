import {
  FETCH_ENTREVISTAS,
  ADD_ENTREVISTA,
  DELETE_ENTREVISTA,
} from "./types";
import axios from "axios";

export const fetchEntrevistas = () => (dispatch) => {
  fetch("http://localhost:5000/api/Entrevista/")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_ENTREVISTAS, payload: data });
    });
};


export function addEntrevista(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addEntrevista`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_ENTREVISTA,
    payload: request,
  };
}

export const deleteEntrevistas = (code) => {
  return (dispatch) => {
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`http://localhost:5000/api/entrevista/${code}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log("DELETE ENTREVISTA", data);
        if (!Object.entries(data).length) {
          return Promise.reject(data);
        }

        return dispatch({
          type: DELETE_ENTREVISTA,
          payload: data,
        });
      });
  };
};
