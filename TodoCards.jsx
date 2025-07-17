// src/components/todo/TodoCards.jsx

import React from 'react';
import './TodoCards.css'; // Import the dedicated CSS file
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const TodoCards = ({ title, body, onUpdate, onDelete }) => {
  return (
    <div className="todo-card">
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-body">{body}</p>
      </div>
      <div className="card-actions">
        <button className="action-btn update-btn" onClick={onUpdate}>
          <MdEdit /> Update
        </button>
        <button className="action-btn delete-btn" onClick={onDelete}>
          <MdDeleteForever /> Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCards;
