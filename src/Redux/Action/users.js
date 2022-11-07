import { GET_USER, USER_ERROR  } from "../ActionType/ActionType";
import api from "../Api";



export const GetUser = (prams) => async (dispatch) => {
  try {
    const res = await api.get("products" , {
      params:{
        per_page:prams.per_page,
        offset:prams.offset,
        orderby:'date',
        order:'desc',
        status:'publish',

      }
    });
    // console.log( "header", res.headers["X-WP-Total"] );
    dispatch({
      type: GET_USER,
      payload: res.data,
      headers: res.headers
    });
    
  } catch (e) {
    dispatch({
      type: USER_ERROR,
      payload: console.log(e),
    });
  }
};

