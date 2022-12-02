import { ERROR, GET_DATA, GET_NAME, LOADING } from "./action";

const init = {
  data: [],
  name: "",
  loading: false,
  error: false,
};

export const reducer = (store = init, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...store,
        loading: true,
        error: false,
      };
    case ERROR:
      return {
        ...store,
        error: true,
        loading: false,
      };
    case GET_DATA:
      return {
        ...store,
        data: action.payload,
        loading: false,
        error: false,
      };
    case GET_NAME:
      return {
        ...store,
        name: action.payload,
      };
    default:
      return store;
  }
};
