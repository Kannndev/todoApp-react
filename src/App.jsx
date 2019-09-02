import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './components/header';
import CreateTodo from './components/createTodo';
import TodoItem from './components/todoItem';
import Footer from './components/footer';
import { helper } from './helpers/helper';

import './App.css';
import actionConstants from './store/actionConstants';

class App extends Component {

  render() {
    const { updateAllToggle, isSelectAll, todoList, updateTodo, deleteTodo, addTodo, clearTodo, allTodos } = this.props
    return (
      <div className="App">
        <Header />
        <CreateTodo todoList={todoList}
          updateAllToggle={updateAllToggle}
          isSelectAll={isSelectAll}
          onAdd={addTodo} />
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
        <Footer count={allTodos.filter(elem => !elem.completionStatus).length}
          onClear={clearTodo}
          completedCount={todoList.filter(elem => elem.completionStatus).length} />
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => {
  return {
    isSelectAll: state.isSelectAll,
    todoList: helper.filterTodos(state.todoList, match.params.status),
    allTodos: state.todoList
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
    clearTodo: () => {
      dispatch({ type: actionConstants.CLEAR });
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
