import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        { this.props.todos.map((todo, index) =>
          <Todo
            {...todo}
            key={index}
            onClick={() => this.props.onTodoClick(index)}
          />
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};