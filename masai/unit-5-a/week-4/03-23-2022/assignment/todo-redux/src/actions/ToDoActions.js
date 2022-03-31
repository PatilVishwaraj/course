/* eslint-disable no-unused-vars */
export const TASK_TO_DELETE = 'TASK_TO_DELETE';
export const DELETE_TASK = 'DELETE_TASK';

export const setTaskToDelete = (task) => {
  return { type: TASK_TO_DELETE, payload: task };
};

export const deleteTask = () => {
  return { type: DELETE_TASK };
};
