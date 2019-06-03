import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodolistItem extends Component {
  onLabelClick = () => {
    console.log(`click ${this.props.label}`);
  }
  render() {
    const { label, important = false, done = false } = this.props;
    let dynamicClasses = 'todo-list-item';
    if (important) {
      dynamicClasses += ' important';
    }
    
    if (done) {
      dynamicClasses += ' done';
    }
    return (
      <span className={ dynamicClasses }>
            <span
              className="todo-list-item-label"
              onClick={this.onLabelClick}
            >
              { label }
            </span>
            <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>
            <button  type="button"
                      className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash" />
            </button>
      </span>
    );
  }
}

