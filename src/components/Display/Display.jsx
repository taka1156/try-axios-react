import React from 'react';
import Tables from '../Table/Tables';

const Display = (props) => {
  const { selectedTag, articles } = props;

  const visible = () => {
    if (articles.length !== 0) {
      return articles.map((article) => {
        return (
          <Tables
            key={article.id}
            selectedTag={selectedTag}
            article={article}
          />
        );
      });
    } else {
      return (
        <div className="load">
          <p>suspend</p>
        </div>
      );
    }
  };

  return (
    <div className="jumbotron">
      <div className="container">{visible()}</div>
    </div>
  );
};

export default Display;
