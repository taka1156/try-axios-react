import axios from 'axios';

const generateQiitaURL = (tag, maxIndex) => {
  return `https://qiita.com/api/v2/tags/${tag}/items?page=1&per_page=${maxIndex}`;
};

const sortArticle = (articles) => {
  return articles.sort((a, b) => b.likes_count - a.likes_count);
};

const getArticles = async (tag, maxIndex) => {
  const url = generateQiitaURL(tag, maxIndex);
  return await axios
    .get(url)
    .then(({ data }) => sortArticle(data))
    .catch((e) => {
      console.error(e);
    });
};

export { getArticles };
