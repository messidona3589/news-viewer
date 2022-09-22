import { handleActions } from "redux-actions";
import * as api from '../lib/api';
import produce from "immer";
import createRequestThunk from "../lib/createRequestThunk";

const GET_NEWS = 'news/GET_NEWS';
const GET_NEWS_SUCCESS = 'news/GET_NEWS_SUCCESS';

export const getNews = query => createRequestThunk(GET_NEWS, api.getNews(query));

const initialState = {articles: null};

const sample = handleActions(
  {
    [GET_NEWS_SUCCESS] : (state, {payload : articles}) => produce(state, draft => {
      draft.articles = articles;
    }),
  },
  initialState
);

export default sample;