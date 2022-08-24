import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import "../Pages.css";

function TodoList() {
  const todos = useSelector((state) => {
    return state.tasks;
  });
  return (
    <ul className="d">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.name} />
      ))}
    </ul>
  );
}

export default TodoList;
