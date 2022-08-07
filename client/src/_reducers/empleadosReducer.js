import {
  FETCH_EMPLEADOS,
  FILTER_EMPLEADOS_BY_CATEGORY,
  ADD_EMPLEADO,
  DELETE_EMPLEADO,
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
    case FETCH_EMPLEADOS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case ADD_EMPLEADO:
      return { ...state, addEmpleado: action.payload };

    case DELETE_EMPLEADO:
      console.log(action.payload);
      const newEmpleado = [...state.items];
      const empleadoToDelete = newEmpleado.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newEmpleado.splice(empleadoToDelete, 1);
      return {
        ...state,
        isLoading: false,
        items: newEmpleado,
      };
    default:
      return state;
  }
}
