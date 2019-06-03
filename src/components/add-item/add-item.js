import React, { Component } from 'react';
import './add-item.css';

export default class AddItemForm extends Component {
  onAddItem = () => {
    this.props.onAdd('New Item');
  }
  render() {
    return (
      <div className="add-item-form">
        <button type="button" className="btn btn-info" onClick={ this.onAddItem }>Add TODO</button>
      </div>
    );
  }
}
