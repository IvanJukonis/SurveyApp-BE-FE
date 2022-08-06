import {
  FETCH_TERCEROS,
  FILTER_TERCEROS_BY_CATEGORY,
  ADD_TERCERO,
  DELETE_TERCERO,
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
    case FETCH_TERCEROS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case ADD_TERCERO:
      return { ...state, addTercero: action.payload };

    case DELETE_TERCERO:
      console.log(action.payload);
      const newTercero = [...state.items];
      const terceroToDelete = newTercero.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newTercero.splice(terceroToDelete, 1);
      return {
        ...state,
        isLoading: false,
        items: newTercero,
      };
    default:
      return state;
  }
}
