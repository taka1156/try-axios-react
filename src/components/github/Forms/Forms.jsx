import React, { useState } from 'react';
import { MaxIndex } from '../../../constants/';

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
  const [userName, setUserName] = useState('');
  const [maxPage, setMaxPage] = useState(10);

  const submitFunc = (e) => {
    e.preventDefault();
    props.setSearchInfo(userName, maxPage);
  };
  

  return (
    <form onSubmit={(e) => submitFunc(e)}>
      <div className="d-flex flex-column">
        <label htmlFor="user-name">user name</label>
        <input
          id="user-name"
          type="text"
          placeholder="github user name"
          className="col-10 mx-auto form-group form-control"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
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
