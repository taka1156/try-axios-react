import React, { useState } from 'react';
import { keyWordList, MaxIndex } from '../../../constants/';

// セレクタの内容生成
const generateWord = (keywords) => {
  return keywords.map((word) => <option key={word}>{word}</option>);
};

// 1 ~ end (per 10)
const generateIndex = (end = 50) => {
  return [...new Array(end/10).keys()].map((i) => {
    const index = (i + 1) * 10;
      return (
        <option key={index} value={index}>
          {index}
        </option>
      );
    });
};

const Forms = (props) => {
  const [tag, setTag] = useState('React');
  const [maxPage, setMaxPage] = useState(10);

  const submitFunc = (e) => {
    e.preventDefault();
    props.setSearchInfo(tag, maxPage);
  };

  return (
    <form onSubmit={(e) => submitFunc(e)}>
      <div className="d-flex flex-column">
        <label htmlFor="keyword">KeyWord</label>
        <input
          id="keyword"
          type="text"
          value={tag}
          className="col-10 mx-auto form-group form-control"
          list="key-word-list"
          onChange={(e) => {
            setTag(e.target.value);
          }}
        />
        <datalist id="key-word-list">{generateWord(keyWordList)}</datalist>
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="max-index">MaxIndex</label>
        <select
          id="max-index"
          className="col-10 mx-auto form-group form-control"
          onChange={(e) => {
            setMaxPage(e.target.value);
          }}
        >
          {generateIndex(MaxIndex)}
        </select>
      </div>

      <input
        type="submit"
        className="col-4 mx-auto form-group btn btn-outline-light"
        value="確定"
      />
    </form>
  );
};

export default Forms;
