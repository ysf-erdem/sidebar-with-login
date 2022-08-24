import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import "../Pages.css";

function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    dispatch(
      addTask({
        task: value,
      })
    );
    setValue("");
  };
  return (
    <div className="task">
      <input
        type="text"
        placeholder="Ne yapmak istersin?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button onClick={onSubmit}>Ekle</button>
    </div>
  );
}

export default AddTodo;
