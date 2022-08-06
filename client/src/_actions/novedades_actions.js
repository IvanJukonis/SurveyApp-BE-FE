import {
  FETCH_NOVEDADES,
  ADD_NOVEDAD,
  DELETE_NOVEDAD,
} from "./types";
import axios from "axios";

export const fetchNovedades = () => (dispatch) => {
  fetch("http://localhost:5000/api/Novedad/")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_NOVEDADES, payload: data });
    });
};


export function addNovedad(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addNovedad`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_NOVEDAD,
    payload: request,
  };
}

export const deleteNovedades = (code) => {
  return (dispatch) => {
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`http://localhost:5000/api/novedad/${code}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log("DELETE NOVEDAD", data);
        if (!Object.entries(data).length) {
          return Promise.reject(data);
        }

        return dispatch({
          type: DELETE_NOVEDAD,
          payload: data,
        });
      });
  };
};
