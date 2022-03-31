/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { setTaskToDelete } from '../../actions/ToDoActions';

import './styles.css';

const CardTask = ({ task, setTaskToDelete }) => {
  const handleDelete = () => {
    setTaskToDelete(task);
  };

  return (
    <div className="card-wrapper">
      <div className="card-content">
        <h4>{`${task.id} - ${task?.title}`}</h4>
        <p>{task?.description}</p>
      </div>
      <div className="card-sidebar">
        <button onClick={() => handleDelete()}>Delete</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    taskToDelete: state.todo.taskToDelete,
  };
};

export default connect(mapStateToProps, { setTaskToDelete })(CardTask);
