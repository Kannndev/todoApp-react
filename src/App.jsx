import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/header';
import CreateTodo from './components/createTodo';
import TodoItem from './components/todoItem';
import './App.css';
import actionConstants from './store/actionConstants';

class App extends Component {
  render() {
    const { updateAllToggle, isSelectAll, todoList, updateTodo, deleteTodo, addTodo } = this.props
    return (
      <div className="App">
        <Header />
        <CreateTodo todoList={todoList}
          updateAllToggle={updateAllToggle}
          isSelectAll={isSelectAll}
          add={addTodo} />
        <React.Fragment>
          {todoList.map(elem => {
            return (
              <TodoItem key={elem.id}
                onUpdate={updateTodo}
                todo={elem}
                onDelete={deleteTodo}>
              </TodoItem>
            )
          })}
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSelectAll: state.isSelectAll,
    todoList: state.todoList
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: payload => {
      dispatch({ type: actionConstants.ADD_TODO, payload });
    },
    updateTodo: payload => {
      dispatch({ type: actionConstants.UPDATE_TODO, payload });
    },
    updateAllToggle: payload => {
      dispatch({ type: actionConstants.UPDATE_ALL_TOGGLE, payload });
    },
    deleteTodo: payload => {
      dispatch({ type: actionConstants.DELETE_TODO, payload });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
