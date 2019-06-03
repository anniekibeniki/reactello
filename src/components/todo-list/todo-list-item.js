import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodolistItem extends Component {
  state = {
    done: this.props.done,
    important: this.props.important,
  };

  onLabelClick = () => {
    this.setState((state) => {
      return { done: !state.done };
    });
  }
  onMarkImportant = () => {
    this.setState((state) => {
      return { important: !state.important };
    });
  }
  onDeleteItem = () => {
    const { onDeleted } = this.props;
    onDeleted();
  }

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classes = ['todo-list-item', 'd-inline-flex'];
    if (important) {
      classes.push('important');
    }
    if (done) {
      classes.push('done');
    }
    return (
      <span className={ classes.join(' ') }>
            <span
              className="todo-list-item-label"
              onClick={this.onLabelClick}
            >
              { label }
            </span>
            <button type="button"
              onClick={this.onMarkImportant}
              className="btn btn-outline-success btn-sm">
                <i className="fa fa-exclamation" />
            </button>
            <button  type="button"
               onClick={this.onDeleteItem}
              className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash" />
            </button>
      </span>
    );
  }
}

