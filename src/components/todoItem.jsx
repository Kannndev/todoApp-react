import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { helper } from '../helpers/helper';
import './todoItem.css'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.todo.isEditing && this.props.todo.isEditing) {
            this.inputRef.current.focus();
        }
    }

    render() {
        const { todo, onUpdate, onDelete } = this.props;
        return (<div className="todo todo-list">
            <button disabled={todo.isEditing} className="btn btn-light btn-sm" onClick={() => onUpdate({ ...todo, completionStatus: !todo.completionStatus })}>
                <FontAwesomeIcon icon={helper.getIconForCompletion(todo.completionStatus)} size="2x" />
            </button>
            <input type="text"
                ref={this.inputRef}
                disabled={!todo.isEditing}
                onChange={(e) => onUpdate({ ...todo, text: e.target.value })}
                onKeyUp={(e) => this.handleKeyDown(e)}
                onBlur={(e) => onUpdate({ ...todo, text: e.target.value, isEditing: false })}
                style={{ textDecoration: todo.completionStatus ? 'line-through' : 'none' }}
                className="form-control todo-text"
                placeholder="What needs to be done?"
                value={todo.text} />
            <button onClick={() => this.props.onUpdateEditState({ ...this.props.todo, isEditing: true })}
                disabled={todo.completionStatus}
                className="btn btn-light btn-sm"
                style={{ paddingLeft: 10 }}>
                <FontAwesomeIcon icon={['fas', 'edit']} size="2x" />
            </button>
            <button onClick={() => onDelete(todo)} className="btn btn-light btn-sm">
                <FontAwesomeIcon icon={['fas', 'trash-alt']} size="2x" />
            </button>
        </div>);
    }

    handleKeyDown(e) {
        if (e.keyCode === 13) {
            this.props.onUpdateEditState({ ...this.props.todo, isEditing: false });
        }
    }

}

export default TodoItem;