/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { setTaskToDelete, deleteTask } from '../../actions/ToDoActions';
import CardTask from '../CardTask/CardTask';

import './styles.css';

const ListTask = (props) => {
  const refConfirmDelete = useRef(null);
  const { tasks, taskToDelete, setTaskToDelete, deleteTask } = props;

  useEffect(() => {
    if (refConfirmDelete.current)
      refConfirmDelete.current.style.visibility = taskToDelete
        ? 'visible'
        : 'hidden';
  }, [taskToDelete]);

  const handleCancelDelete = () => {
    setTaskToDelete(null);
  };

  return (
    <>
      <div className="list-wrapper">
        {tasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
      {taskToDelete && (
        <div ref={refConfirmDelete} className="confirm-delete">
          <h4>Are you sure you want to remove this item?</h4>
          <div className="confirm-options">
            <button onClick={() => deleteTask()}>Confirm</button>
            <button onClick={() => handleCancelDelete()}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.todo.tasks,
    taskToDelete: state.todo.taskToDelete,
  };
}

export default connect(mapStateToProps, { setTaskToDelete, deleteTask })(
  ListTask
);
