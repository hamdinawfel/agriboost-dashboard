import { LOADING, GET_STOCK_BUDGET, GET_REVENUES } from "./types";

const initialState = {
  loading: false,
  stockBudget: "",
  data: [],
  city: "",
  sum: 0,
  percent: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_STOCK_BUDGET:
      return {
        ...state,
        stockBudget: action.payload,
        loading: false,
      };
    case GET_REVENUES:
      return {
        ...state,
        data: action.payload,
        city: action.payload[0].city,
        sum: action.payload[0].sum,
        percent: action.payload[0].percent,
        loading: false,
      };
    default:
      return state;
  }
}
