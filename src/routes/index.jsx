import React from 'react'
import Github from '../page/GithubRepos'
import Qiita from '../page/SearchArticle'

const routes = [
  {
    path: '/',
    exact: true,
    children: <Qiita />,
  },
  {
    path: '/github',
    exact: true,
    children: <Github />,
  },
];

export {routes};
