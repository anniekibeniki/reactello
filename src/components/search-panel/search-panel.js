import React from 'react';
import './search-panel.css';

export default class SearchPanel extends React.Component {
  placeholder = 'Type here to search';
  state = {
    value: ''
  };
  onChangeValue = (e) => {
    this.setState({ value: e.target.value });
    this.props.onSearchTodo(e.target.value);
  }

  render() {
    return (
      <input type="text"
        placeholder={this.placeholder}
        value={this.state.value}
        onChange={this.onChangeValue}
        className="form-control search-input"
        />
    );
  }
}
