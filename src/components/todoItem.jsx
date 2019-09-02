import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { helper } from '../helpers/helper';
import './../styles/todoItem.css'
import DeleteModal from './deleteModal';

class TodoItem extends Component {

    state = {
        isDeleteModalOpen: false
    }

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
        const { todo, onUpdate } = this.props;
        return (<div className="todo todo-list">
            <button disabled={todo.isEditing} className="btn btn-light btn-sm icon-btn" onClick={() => onUpdate({ ...todo, completionStatus: !todo.completionStatus })}>
                <FontAwesomeIcon icon={helper.getIconForCompletion(todo.completionStatus)} size={helper.getIconSizeBasedOnScreenSize()} />
            </button>
            <label hidden={todo.isEditing}
                style={{ textDecoration: todo.completionStatus ? 'line-through' : 'none', height: 'auto' }}
                className="form-control todo-text">
                {todo.text}
            </label>
            <input type="text"
                ref={this.inputRef}
                hidden={!todo.isEditing}
                onChange={(e) => onUpdate({ ...todo, text: e.target.value })}
                onKeyUp={(e) => this.handleKeyDown(e)}
                onBlur={(e) => onUpdate({ ...todo, text: e.target.value, isEditing: false })}
                style={{ textDecoration: todo.completionStatus ? 'line-through' : 'none', marginBottom: 8 }}
                className="form-control todo-text"
                placeholder="What needs to be done?"
                value={todo.text} />
            <button onClick={() => this.props.onUpdate({ ...this.props.todo, isEditing: true })}
                disabled={todo.completionStatus}
                className="btn btn-light btn-sm icon-btn"
                style={{ paddingLeft: 10 }}>
                <FontAwesomeIcon icon={['fas', 'edit']} size={helper.getIconSizeBasedOnScreenSize()} />
            </button>
            <button onClick={() => this.setState({ isDeleteModalOpen: true })} className="btn btn-light btn-sm icon-btn">
                <FontAwesomeIcon icon={['fas', 'trash-alt']} size={helper.getIconSizeBasedOnScreenSize()} />
            </button>
            <DeleteModal isDeleteModalOpen={this.state.isDeleteModalOpen} handleDelete={this.handleDelete.bind(this)}></DeleteModal>
        </div>);
    }

    handleKeyDown(e) {
        if (e.keyCode === 13) {
            this.props.onUpdate({ ...this.props.todo, isEditing: false });
        }
    }

    handleDelete(confimation) {
        this.setState({ isDeleteModalOpen: false });
        if (confimation) {
            this.props.onDelete(this.props.todo);
        }
    }

}

export default TodoItem;