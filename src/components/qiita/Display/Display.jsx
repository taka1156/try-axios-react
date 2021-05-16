import React from 'react';
import Tables from '../Table/Tables';
import Spinner from '../../Spinner/Spinner';

const Display = (props) => {
  const { selectedTag, articles } = props;

  const visible = () => {
    if (articles.length !== 0) {
      // 記事表示ができる
      return (
        <div className="jumbotron">
          <div className="container">
            {articles.map((article) => {
              return (
                <Tables
                  key={article.id}
                  selectedTag={selectedTag}
                  article={article}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      // 記事表示できない
      return <Spinner />;
    }
  };

  return <>{visible()}</>;
};

export default Display;
