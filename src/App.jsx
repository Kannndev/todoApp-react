import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './components/header';
import CreateTodo from './components/createTodo';
import TodoItem from './components/todoItem';
import Footer from './components/footer';

import './App.css';
import actionConstants from './store/actionConstants';

class App extends Component {

  render() {
    console.log(this.props);
    const { updateAllToggle, isSelectAll, todoList, updateTodo, deleteTodo, addTodo } = this.props
    return (
      <div className="App">
        <Header />
        <CreateTodo todoList={todoList}
          updateAllToggle={updateAllToggle}
          isSelectAll={isSelectAll}
          addTodo={addTodo} />
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
        <Footer count={todoList.filter(elem => !elem.completionStatus).length} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log('state', state);
  console.log('props', props);
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
