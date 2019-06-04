import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'important', label: 'Important' },
    { name: 'done', label: 'Done' }
  ];

  render() {
    const {activeFilter = 'all', onChange } = this.props;
    const buttons = this.filterButtons.map(({ name, label }) => {
      const isActive = (name === activeFilter);
      const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');
      return (
        <button key={name}
                type="button"
                className={classNames}
                onClick={() => { onChange(name); }}
        >
          {label}     
        </button>
      );
    });
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
