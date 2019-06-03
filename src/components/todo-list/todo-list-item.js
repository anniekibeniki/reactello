import React from 'react';

const TodolistItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }
    return  <span style={style}>{ label }</span>
}

export default TodolistItem;
