import React, { Component } from 'react';
import './add-item-form.css';

export default class AddItemForm extends Component {
  state = {
    value: ''
  };
  onChangeValue = (e) => {
    const newVal = e.target.value;
    this.setState(() => {
      return { value: newVal };
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.value);
    this.setState({ value: '' });
  }
  render() {
    return (
      <form className="add-item-form d-flex" onSubmit={this.onSubmit}>
        <input type="text" className="form-control" onChange={this.onChangeValue} value={ this.state.value } />
        <button type="submit" className="btn btn-info">Add TODO</button>
      </form>
    );
  }
}
