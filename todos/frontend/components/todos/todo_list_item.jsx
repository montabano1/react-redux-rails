import React from 'react';

const TodoListItem = (item) => {
  return (
    <li>
      <h1>{item.title}</h1>
      <br></br>
      <h2>{item.body}</h2>
    </li>
  );
};


export default TodoListItem;
