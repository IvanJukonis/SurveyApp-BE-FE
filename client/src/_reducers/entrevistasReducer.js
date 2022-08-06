import {
  FETCH_ENTREVISTAS,
  FILTER_ENTREVISTAS_BY_CATEGORY,
  ADD_ENTREVISTA,
  DELETE_ENTREVISTA,
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
    case FETCH_ENTREVISTAS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case ADD_ENTREVISTA:
      return { ...state, addEntrevista: action.payload };

    case DELETE_ENTREVISTA:
      console.log(action.payload);
      const newEntrevista = [...state.items];
      const entrevistaToDelete = newEntrevista.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newEntrevista.splice(entrevistaToDelete, 1);
      return {
        ...state,
        isLoading: false,
        items: newEntrevista,
      };
    default:
      return state;
  }
}
