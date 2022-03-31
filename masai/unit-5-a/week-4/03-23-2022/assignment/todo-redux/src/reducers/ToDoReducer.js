/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { DELETE_TASK, TASK_TO_DELETE } from '../actions/ToDoActions';

const initialState = {
  task: null,
  tasks: [
    { id: 1, title: 'First Task', description: 'Clean the house' },
    { id: 2, title: 'Cat', description: 'Get food for the cat' },
    { id: 3, title: 'Trip', description: 'Book hotel and tickets' },
  ],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'fetch':
      return { ...state };
    case TASK_TO_DELETE:
      return { ...state, taskToDelete: payload };
    case DELETE_TASK:
      const tasks = state.tasks.filter(
        (task) => task.id !== state.taskToDelete.id
      );

      return { ...state, taskToDelete: null, tasks };
    default:
      return state;
  }
}
