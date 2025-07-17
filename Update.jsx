// src/components/todo/Update.jsx

import React, { useEffect, useState } from 'react';
import './Update.css'; // Make sure this CSS file exists
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../store/todoslice';

const Update = ({ onClose, update }) => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: '',
    body: '',
  });

  // This effect runs when the 'update' prop changes, filling the form
  useEffect(() => {
    if (update) {
      setInputs({
        title: update.name, // FIXED: Use update.name instead of update.title
        body: update.body,
      });
    }
  }, [update]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async () => {
    if (!update || !update._id) {
      toast.error('Task ID is missing. Cannot update.');
      return;
    }
    if (!inputs.title.trim() || !inputs.body.trim()) {
      toast.warn('Title and Body cannot be empty.');
      return;
    }

    try {
      const { data } = await axios.put(
        `http://localhost:1000/api/v2/updateTask/${update._id}`,
        inputs
      );
      
      dispatch(updateTodo(data.task));
      toast.success('Task updated successfully!');
      onClose();
    } catch (error) {
      console.error('Error updating task:', error);
      toast.error('Failed to update the task.');
    }
  };

  return (
    <div className="update-modal-overlay">
      <div className="update-modal-content">
        <h2 className="update-title">Update Your Task</h2>
        <input
          type="text"
          className="update-input"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          placeholder="Task Title"
        />
        <textarea
          className="update-textarea"
          name="body"
          value={inputs.body}
          onChange={handleChange}
          placeholder="Task Description"
        />
        <div className="update-actions">
          <button className="action-btn update-btn" onClick={handleSubmit}>
            Update Task
          </button>
          <button className="action-btn close-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
