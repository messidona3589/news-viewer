import axios from "axios";

export const getNews = query =>
  axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e707fbba838740dcb8c9af246b665620`);