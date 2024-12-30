import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todo);

    return (
        <div className="border rounded p-2">
            {todos.map((dataTodo) => {
                return <TodoItem key={dataTodo.id} id={dataTodo.id} title={dataTodo.title} completed={dataTodo.completed      
                }/>
            })}
        </div>
    );
}

export default TodoList;