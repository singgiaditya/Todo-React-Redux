import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const MyComponent = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>My Todo List</h1>
      <AddTodoForm/>
      <TodoList/>
    </div>
  );
};

export default MyComponent;
