import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { helper } from '../helpers/helper';

class CreateTodo extends Component {
    state = {}
    render() {
        const { updateAllToggle, isSelectAll, todoList } = this.props;
        return (
            <div className="todo new-todo">
                <button className="btn btn-light btn-sm"
                    disabled={todoList.length ? false : true}
                    onClick={() => updateAllToggle(!isSelectAll)}>
                    <FontAwesomeIcon icon={helper.getIconForCompletion(isSelectAll)} size="2x" />
                </button>
                <input type="text" className="form-control todo-text"
                    placeholder="What needs to be done?" onKeyUp={(e) => this.onKeyUp(e)} />
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

export default CreateTodo;