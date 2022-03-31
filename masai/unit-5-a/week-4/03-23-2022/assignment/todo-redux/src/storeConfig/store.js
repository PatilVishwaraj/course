/* eslint-disable no-unused-vars */
import { createStore, combineReducers } from 'redux';
import toDoReducer from '../reducers/ToDoReducer';

const reducers = combineReducers({
  todo: toDoReducer,
});

function store() {
  return createStore(reducers);
}

export default store;
