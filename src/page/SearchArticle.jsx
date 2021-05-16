import React, { useState } from 'react';
import Forms from '../components/qiita/Forms/Forms';
import Display from '../components/qiita/Display/Display';
import { getArticles } from '../logic/getArticles';

const SearchArticle = () => {
  const [selectedTag, setSelectedTag] = useState('');
  const [result, setResult] = useState([]);

  const getQiitaArticles = async (tag, maxPage) => {
    setResult([]) // 初期化
    setSelectedTag(tag); // other tag 除外
    const searchResult = await getArticles(tag, maxPage);
    setResult([...searchResult]);
    // Object.is変更検知
  };

  return (
    <>
      <Forms
        setSearchInfo={(tag, maxPage) => getQiitaArticles(tag, maxPage)}
      />
      <Display selectedTag={selectedTag} articles={result} />
    </>
  );
};

export default SearchArticle;
