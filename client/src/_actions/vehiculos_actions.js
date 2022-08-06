import {
  FETCH_VEHICULOS,
  ADD_VEHICULO,
  DELETE_VEHICULO,
} from "./types";
import axios from "axios";

export const fetchVehiculos = () => (dispatch) => {
  fetch("http://localhost:5000/api/Vehiculo/")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: FETCH_VEHICULOS, payload: data });
    });
};


export function addVehiculo(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addVehiculo`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_VEHICULO,
    payload: request,
  };
}

export const deleteVehiculos = (code) => {
  return (dispatch) => {
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`http://localhost:5000/api/vehiculo/${code}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log("DELETE VEHICULO", data);
        if (!Object.entries(data).length) {
          return Promise.reject(data);
        }

        return dispatch({
          type: DELETE_VEHICULO,
          payload: data,
        });
      });
  };
};
