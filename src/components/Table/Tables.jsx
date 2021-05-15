import React from 'react';
import './Table.css'

const shapeTags = (selectedTag, tags) => {
  const flatedTags = tags.map((tag) => tag.name);
  const filtedTags = flatedTags.filter((tagName) => tagName !== selectedTag);
  let shapedTags = [...filtedTags.slice(0, 3)].reduce(
    (accum, current) => accum + ` ${current}`,
    ''
  );
  return shapedTags;
};

const Tables = (props) => {
  const { selectedTag, article } = props;

  const {
    id,
    title,
    tags,
    likes_count,
    created_at,
    updated_at,
    url,
    comments_count,
    user,
  } = article;

  let tagStr = shapeTags(selectedTag, tags);

  return (
    <table key={id} className="text table table-hover">
      <thead>
        <tr>
          <th colSpan="2">
            <a href={url}>{title}</a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th width="10%">Writer</th>
          <th>{user.name}</th>
        </tr>
        <tr>
          <th width="10%">Good</th>
          <th>{likes_count}</th>
        </tr>
        <tr>
          <th width="10%">Created</th>
          <th>{created_at}</th>
        </tr>
        <tr>
          <th width="10%">Updated</th>
          <th>{updated_at}</th>
        </tr>
        <tr>
          <th width="10%">Comments</th>
          <th>{comments_count}</th>
        </tr>
        <tr>
          <th width="10%">Other Tags</th>
          <th>{tagStr}</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Tables;
