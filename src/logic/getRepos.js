import axios from 'axios';

const generateGithubURL = (userName, maxIndex) => {
  return `https://api.github.com/users/${userName}/repos?page=1&per_page=${maxIndex}`;
};

const getRepos = async (userName, maxIndex) => {
  const url = generateGithubURL(userName, maxIndex);
  return await axios
    .get(url)
    .then(({ data }) => {
      return data.map((repo) => {
          const {url, description, forks_count, stargazers_count, full_name, language, pushed_at} = repo;
          return {url, description, forks_count, stargazers_count, full_name, language, pushed_at}
      });
    })
    .catch((e) => {
      console.error(e);
    });
};

export { getRepos };
