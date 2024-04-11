import { useState } from "react";
import Axios from "axios";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    setTodos([...todos, task]); // Add the new task to the existing list of todos
    Axios.post("/api/todo", {
      todos: [...todos, task], // Send the updated list of todos to the server
    }).then((response) => {
      console.log(response.data);
    });
    setTask(""); // Clear the input field after adding the task
  };

  return (
    <div className="container">
      <h1>Todo List app</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Pass the event object 'e' to the onChange handler
      ></input>
      <button type="submit" onClick={addTask}>
        {/* Call the addTask function */}
        Add task
      </button>
    </div>
  );
};

export default TaskForm;
