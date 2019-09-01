import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';

import Header from './components/header';
import TodoItem from './components/todoItem';
import './App.css';
import actionConstants from './store/actionConstants';
import { helper } from './helpers/helper';

class App extends Component {
  render() {
    const { updateAllToggle, isSelectAll, todoList, updateTodo, updateEditState, deleteTodo } = this.props
    return (
      <div className="App">
        <Header />
        <div className="todo new-todo">
          <button className="btn btn-light btn-sm"
            disabled={todoList.length ? false : true}
            onClick={() => updateAllToggle(!isSelectAll)}>
            <FontAwesomeIcon icon={helper.getIconForCompletion(isSelectAll)} size="2x" />
          </button>
          <input type="text" className="form-control todo-text"
            placeholder="What needs to be done?" onKeyUp={(e) => this.onKeyUp(e)} />
        </div>
        <React.Fragment>
          {todoList.map(elem => {
            return (
              <TodoItem key={elem.id}
                onUpdate={updateTodo}
                todo={elem}
                onDelete={deleteTodo}
                onUpdateEditState={updateEditState}>
              </TodoItem>
            )
          })}
        </React.Fragment>
      </div>
    );
  }

  onKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.addTodo({
        id: parseInt(Math.random() * 100000),
        text: e.target.value,
        isEditing: false,
        completionStatus: false
      })
      e.target.value = '';
    }
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
    updateEditState: payload => {
      dispatch({ type: actionConstants.UPDATE_EDIT_STATE, payload });
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
