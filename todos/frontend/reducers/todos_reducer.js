import { merge } from 'lodash';
import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {

  case RECEIVE_TODOS:
    let todosState = {};
    action.todos.forEach( (el) => {
      todosState[el.id] = el;
    });
    return merge({}, state, todosState);

  case RECEIVE_TODO:
    const { id, title, body, done } = action.todo;
    const newState = merge({}, state);
    const copy = merge(newState,{ [id]: {id, title, body, done}});
    return copy;

  default:
    return state;
  }
};

export default todosReducer;
