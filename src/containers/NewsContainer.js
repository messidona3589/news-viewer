import { getNews } from "../modules/news";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import NewsList from "../components/NewsList";

const NewsContainer = ({category}) => {
  const {articles,loading} = useSelector(({news, loading}) => ({
    articles : news.articles,
    loading : loading['news/GET_NEWS']
  }));
  const dispatch = useDispatch();
  const onGetNews = useCallback(query => dispatch(getNews(query)), [dispatch]);

  useEffect(()=>{
    const query = category === 'all' ? '' : `&category=${category}`;
    onGetNews(query);
  }, [onGetNews, category]);

  return(
    <NewsList articles={articles} loading={loading}/>
  );
};

export default NewsContainer;