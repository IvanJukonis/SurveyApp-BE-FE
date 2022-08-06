import {
  FETCH_ASEGURADOS,
  FILTER_ASEGURADOS_BY_CATEGORY,
  ADD_ASEGURADO,
  DELETE_ASEGURADO,
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
    case FETCH_ASEGURADOS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case ADD_ASEGURADO:
      return { ...state, addAsegurado: action.payload };

    case DELETE_ASEGURADO:
      console.log(action.payload);
      const newAsegurado = [...state.items];
      const aseguradoToDelete = newAsegurado.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newAsegurado.splice(aseguradoToDelete, 1);
      return {
        ...state,
        isLoading: false,
        items: newAsegurado,
      };
    default:
      return state;
  }
}
