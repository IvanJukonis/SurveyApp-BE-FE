import {
  FETCH_SINIESTROS,
  FILTER_SINIESTROS_BY_CATEGORY,
  ADD_SINIESTRO,
  DELETE_SINIESTRO,
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
    case FETCH_SINIESTROS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case ADD_SINIESTRO:
      return { ...state, addSiniestro: action.payload };

    case DELETE_SINIESTRO:
      console.log(action.payload);
      const newSiniestro = [...state.items];
      const siniestroToDelete = newSiniestro.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newSiniestro.splice(siniestroToDelete, 1);
      return {
        ...state,
        isLoading: false,
        items: newSiniestro,
      };
    default:
      return state;
  }
}
