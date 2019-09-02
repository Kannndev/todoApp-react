function getIconForCompletion(status) {
    return status ? ['fas', 'check-circle'] : ['fas', 'circle']
}

function filterTodos(todoList, filter) {
    let filteredTodos;
    switch (filter) {
        case 'active': {
            filteredTodos = todoList.filter(elem => !elem.completionStatus);
            break;
        }
        case 'completed': {
            filteredTodos = todoList.filter(elem => elem.completionStatus);
            break;
        }
        default: {
            filteredTodos = todoList.map(elem => elem);
            break;
        }
    }
    return filteredTodos;
}

function getPunctuation(count) {
    return count > 1 ? 'items' : 'item';
}

function getIconSizeBasedOnScreenSize() {
    return window.innerWidth < 450 ? '1x' : '2x'
}

export const helper = {
    getIconForCompletion,
    filterTodos,
    getPunctuation,
    getIconSizeBasedOnScreenSize
}