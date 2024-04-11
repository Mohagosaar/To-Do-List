import { useState } from "react";
import Axios from "axios";
const TaskForm = () => {
  const [task, setTask] = useState();
  return (
    <div className="container">
      <h1>Todo List app</h1>
      <input
        type="text"
        value={task}
        onChange={() => setTask(e.target.value)}
      ></input>
      <button type="submit">Add task</button>
    </div>
  );
};
export default TaskForm;
