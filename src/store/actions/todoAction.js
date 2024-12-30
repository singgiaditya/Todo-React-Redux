const uid = () => Math.random().toString(34).slice(2);

export const addTodo = (todoTitle) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: uid(),
            title: todoTitle,
            completed: false,
        }
    }
}

export const completeTodo = (id) => {
    return {
        type: "COMPLETE_TODO",
        payload: id,
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id,
    }
}