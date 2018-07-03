import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form';


const TodoList = (props) => {
  return (
    <div>
      <ul className="todo-list">
        <h4>Todosssss</h4>
        {props.todos.map (item => (
          TodoListItem(item)
        ))}
      </ul>
      <TodoForm receiveTodo={ props.receiveTodo }/>
    </div>
  );
};

export default TodoList;
