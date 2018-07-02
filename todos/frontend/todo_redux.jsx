import { configureStore } from "./store/store";
import React from "react";
import ReactDOM from "react-dom";
import { receiveTodos, receiveTodo } from "./actions/todo_actions";
import App from './components/app';

// class TodoRedux extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Todos App</h1>
//       </div>
//     );
//   }
// }
//
// export default TodoRedux;
//
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  ReactDOM.render(<App />, root);
});

const store = configureStore();
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
