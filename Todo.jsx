// src/components/todo/Todo.jsx

import React, { useEffect, useState, useCallback } from 'react';
import './Todo.css'; 
import TodoCards from './TodoCards';
import Update from './Update';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos, addTodo, deleteTodo as deleteTodoAction } from '../../store/todoslice'; 

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [inputs, setInputs] = useState({ title: '', body: '' });
  const [tobeUpdate, setTobeUpdate] = useState(null);

  useEffect(() => {
    const id = sessionStorage.getItem('id');
    if (!id) {
      toast.error('Please log in to view your tasks.');
      return;
    }
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get(`http://localhost:1000/api/v2/getTasks/${id}`);
        dispatch(setTodos(data.list || []));
      } catch (error) {
        console.error('Error fetching tasks:', error);
        toast.error('Failed to fetch tasks.');
      }
    };
    fetchTasks();
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(async () => {
    if (!inputs.title.trim() || !inputs.body.trim()) {
      toast.warn('Title and Body cannot be empty.');
      return;
    }

    const id = sessionStorage.getItem('id');
    if (!id) {
      toast.error('Please sign up or log in to save tasks.');
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:1000/api/v2/addTask', {
        title: inputs.title,
        body: inputs.body,
        id: id,
      });
      dispatch(addTodo(data.task));
      setInputs({ title: '', body: '' });
      toast.success('Your task has been added successfully!');
    } catch (error) {
      console.error('Error adding task:', error);
      toast.error('Failed to add the task.');
    }
  }, [inputs, dispatch]);

  const deleteTask = async (taskId) => {
    const id = sessionStorage.getItem('id');
    if (!id) {
      toast.error('Please log in to delete tasks.');
      return;
    }

    try {
      await axios.delete(`http://localhost:1000/api/v2/deleteTask/${taskId}`, {
        data: { id },
      });
      dispatch(deleteTodoAction(taskId));
      toast.success('Task deleted successfully!');
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Failed to delete the task.');
    }
  };

  const showUpdateModal = (task) => {
    setTobeUpdate(task);
  };

  const hideUpdateModal = () => {
    setTobeUpdate(null);
  };

  return (
    <>
      <div className="todo-wrapper">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="todo-main-container">
          {/* Input Section */}
          <div className="todo-inputs-container">
            <h1 className="todo-title">Add a New Task</h1>
            <input
              type="text"
              placeholder="Task Title"
              className="todo-input"
              name="title"
              value={inputs.title}
              onChange={handleChange}
            />
            <textarea
              placeholder="Task Description"
              className="todo-textarea"
              name="body"
              value={inputs.body}
              onChange={handleChange}
            />
            <button className="add-task-btn" onClick={handleSubmit}>
              Add Task
            </button>
          </div>

          {/* Task List Section */}
          <div className="todo-list-container">
            {todos && todos.length > 0 ? (
              todos.map((item) => (
                <TodoCards
                  key={item._id}
                  title={item.name} // FIXED: Use item.name instead of item.title
                  body={item.body}
                  onDelete={() => deleteTask(item._id)}
                  onUpdate={() => showUpdateModal(item)}
                />
              ))
            ) : (
              <p className="no-tasks-message">No tasks found. Add one above!</p>
            )}
          </div>
        </div>
      </div>

      {/* Update Modal */}
      {tobeUpdate && (
        <Update
          onClose={hideUpdateModal}
          update={tobeUpdate}
        />
      )}
    </>
  );
};

export default Todo;
