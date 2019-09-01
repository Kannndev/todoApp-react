import actionConstants from './actionConstants';

const initialState = {
    todoList: [
        { id: 1, text: 'This is my first todo', completionStatus: false, isEditing: false }
    ],
    isSelectAll: false
}

export default (state = initialState, { type, payload }) => {
    let newState = { ...state };
    switch (type) {
        case actionConstants.ADD_TODO: {
            const todoList = [...newState.todoList, payload];
            newState.todoList = todoList;
            break;
        }
        case actionConstants.UPDATE_TODO: {
            const todoList = [...newState.todoList];
            const todoIndex = todoList.findIndex(elem => elem.id === payload.id);
            const todo = { ...todoList[todoIndex] };
            todo.text = payload.text;
            todo.completionStatus = payload.completionStatus;
            todo.isEditing = payload.isEditing;
            todoList[todoIndex] = todo;
            newState.todoList = todoList;
            break;
        }
        case actionConstants.UPDATE_EDIT_STATE: {
            const todoList = [...newState.todoList];
            const todoIndex = todoList.findIndex(elem => elem.id === payload.id);
            const todo = { ...todoList[todoIndex] };
            todo.isEditing = payload.isEditing;
            todoList[todoIndex] = todo;
            newState.todoList = todoList;
            break;
        }
        case actionConstants.UPDATE_ALL_TOGGLE: {
            const todoList = [...newState.todoList];
            newState.todoList = todoList.map(elem => { elem.completionStatus = payload; return elem });
            newState.isSelectAll = payload;
            break;
        }
        case actionConstants.DELETE_TODO: {
            const todoList = [...newState.todoList];
            newState.todoList = todoList.filter(elem => elem.id !== payload.id);
            break;
        }
        default: {
            break;
        }
    }
    return newState;
}