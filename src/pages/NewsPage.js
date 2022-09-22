import { useParams } from "react-router";
import Categories from "../components/Categories";
import NewsContainer from "../containers/NewsContainer";

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <>
      <Categories />
      <NewsContainer category={category}/>
    </>
  );
};

export default NewsPage;