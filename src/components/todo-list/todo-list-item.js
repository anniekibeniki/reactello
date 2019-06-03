import React from 'react';
import './todo-list-item.css';

const TodolistItem = ({ label, important = false, done = false }) => {
    let dynamicClasses = 'todo-list-item';
    if (important) {
      dynamicClasses += ' important';
    }
    
    if (done) {
      dynamicClasses += ' done';
    }

    return (
        <span className={ dynamicClasses }>
            <span className="todo-list-item-label">
                { label }
            </span>
            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>
            <button  type="button" className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash" />
            </button>
        </span>
    );
};

export default TodolistItem;
