import { combineReducers } from "redux";
import news from "./news";
import loading from "./loading";

const rootReducer = combineReducers({
  news,
  loading,
});

export default rootReducer;