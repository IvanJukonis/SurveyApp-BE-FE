import {
  FETCH_EMPLEADOS,
  ADD_EMPLEADO,
  DELETE_EMPLEADO,
} from "./types";
import axios from "axios";

export const fetchempleados = () => (dispatch) => {
  fetch("http://localhost:5000/api/Empleado/")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_EMPLEADOS, payload: data });
    });
};


export function addEmpleado(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addEmpleado`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_EMPLEADO,
    payload: request,
  };
}

export const deleteEmpleados = (code) => {
  return (dispatch) => {
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`http://localhost:5000/api/empleado/${code}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log("DELETE EMPLEADO", data);
        if (!Object.entries(data).length) {
          return Promise.reject(data);
        }

        return dispatch({
          type: DELETE_EMPLEADO,
          payload: data,
        });
      });
  };
};
