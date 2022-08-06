import {
  FETCH_NOVEDADES,
  FILTER_NOVEDADES_BY_CATEGORY,
  ADD_NOVEDAD,
  DELETE_NOVEDAD,
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
    case FETCH_NOVEDADES:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case ADD_NOVEDAD:
      return { ...state, addNovedad: action.payload };

    case DELETE_NOVEDAD:
      console.log(action.payload);
      const newNovedad = [...state.items];
      const novedadToDelete = newNovedad.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newNovedad.splice(novedadToDelete, 1);
      return {
        ...state,
        isLoading: false,
        items: newNovedad,
      };
    default:
      return state;
  }
}
