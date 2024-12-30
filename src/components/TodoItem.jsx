import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../store/actions/todoAction";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(completeTodo(id));
  }

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  }

  return (
    <li
      className={`list-group-item p-2 rounded mb-2 ${
        completed && "list-group-item-success"
      }`}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <input type="checkbox" className="mr-3" checked={completed} onClick={handleAddTodo} />
          <p className="ms-3 mb-0">{title}</p>
        </div>
        <button className="btn btn-danger" onClick={handleDeleteTodo}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
