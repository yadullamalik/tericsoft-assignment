import axios from "axios";

export const GET_DATA = "GET_DATA";
export const GET_NAME = "GET_NAME";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

export const getData = (prop) => (dispatch) => {
  dispatch({type:LOADING})
  return axios
    .get(`https://tericsoft-json.onrender.com/api/${prop}`)
    .then((r) => dispatch({ type: GET_DATA, payload: r.data}))
    .catch(()=>dispatch({type:ERROR}))
};

export const getName=(name)=>{
  return {
    type:GET_NAME,
    payload:name
  }
}