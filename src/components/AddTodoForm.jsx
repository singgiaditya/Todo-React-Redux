import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todoAction";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submitTodo = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  return (
    <form onSubmit={submitTodo} className="form-inline mt-3 mb-3">
      <label className="sr-only" htmlFor="bookName">
        Name
      </label>
      <input
        id="bookName"
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
