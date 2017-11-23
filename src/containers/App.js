import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from "../action/actions";
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    const { dispatch, visibleTodos, VisibilityFilter } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text =>
          dispatch(addTodo(text))
        }/>
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
          dispatch(completeTodo(index))
        }/>
        <Footer
          filter={VisibilityFilter}
          onFilterChange={nextFilter =>
          dispatch(setVisibilityFilter(nextFilter))
        }/>
      </div>
    )
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  VisibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}


function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    VisibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App);
