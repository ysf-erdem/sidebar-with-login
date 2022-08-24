import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import Form from "react-bootstrap/Form";
import "../Pages.css";

function TodoItem({ id, title }) {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <li>
      <div>
        {title} {}
        <Form.Control type="date" name="date" /> {}
        <button
          onClick={() => {
            removeTask();
          }}
        >
          Sil
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
