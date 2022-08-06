import {
  FETCH_VEHICULOS,
  FILTER_VEHICULOS_BY_CATEGORY,
  ADD_VEHICULO,
  DELETE_VEHICULO,
} from "../_actions/types";

const initialState = {
  items: [],
  filteredItems: [],
  error: null,
  isLoading: false,
  message: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_VEHICULOS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case ADD_VEHICULO:
      return { ...state, addVehiculo: action.payload };

    case DELETE_VEHICULO:
      console.log(action.payload);
      const newVehiculo = [...state.items];
      const vehiculoToDelete = newVehiculo.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newVehiculo.splice(vehiculoToDelete, 1);
      return {
        ...state,
        isLoading: false,
        items: newVehiculo,
      };
    default:
      return state;
  }
}
