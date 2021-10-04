import { LOADING, GET_RECLAMATIONS } from "./types";
const initialState = {
  loading: false,
  data: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_RECLAMATIONS:
      return { ...state, data: payload, loading: false };

    default:
      return state;
  }
}
