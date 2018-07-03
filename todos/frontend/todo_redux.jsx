import { configureStore } from "./store/store";
import React from "react";
import ReactDOM from "react-dom";
import { receiveTodos, receiveTodo } from "./actions/todo_actions";
import Root from './components/root';
import { allTodos } from './reducers/selectors.js';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  ReactDOM.render(<Root store={ store } />, root);
});

const store = configureStore();
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos;
