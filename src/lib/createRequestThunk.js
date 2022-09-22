import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return async dispatch => {
    dispatch({type});
    dispatch(startLoading(type));
    try {
      const response = await request;
      dispatch({type: SUCCESS, payload : response.data.articles});
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({type : FAILURE, payload : e, error : true});
      dispatch(startLoading(type));
      throw e;
    };
  };
}