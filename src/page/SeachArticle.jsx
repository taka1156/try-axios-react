import React, { useState } from 'react';
import Forms from '../components/Forms/Forms';
import Display from '../components/Display/Display';
import { getArticles } from '../logic/getArticles';

const SeachArticle = () => {
  const [selectedTag, setSelectedTag] = useState('');
  const [result, setResult] = useState([]);

  const getQiitaArticles = async (tag, maxPage) => {
    setSelectedTag(tag);
    const seachResult = await getArticles(tag, maxPage);
    setResult(...seachResult);
  };

  return (
    <>
      <Forms
        setSeachInfo={(tag, maxPage) => {
          getQiitaArticles(tag, maxPage);
        }}
      />
      <Display selectedTag={selectedTag} articles={result} />
    </>
  );
};

export default SeachArticle;
