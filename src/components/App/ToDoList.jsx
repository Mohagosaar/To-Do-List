// import "./App.css";
// CSS import commented out
import { useState } from "react";

// ToDoList component definition
const ToDoList = () => {
  const [task, setTask] = useState(""); // Changed variable name from todos to task

  const [todos, setTodos] = useState([
    { task: "I will be going gym", isCompleted: false },
    { task: "we are having a fun party", isCompleted: true },
    { task: "I will be studying javascript", isCompleted: false },
  ]);

  // Function to handle form submission
  const handleForm = (event) => {
    event.preventDefault();
    // Updated to correctly access task value from state
    setTodos([...todos, { task: task, isCompleted: true }]); // Updated to correctly update todos state
    setTask(""); // Clear the task input after submission
  };

  // Component JSX
  return (
    <div className="container my-5">
      <div
        className="mx-auto rounder border p-4"
        style={{ width: "600px", backgroundColor: "#08618d" }}
      >
        <h1 className=" text-white text-center">To do List App</h1>
        {/* Form for adding tasks */}
        <form className="d-flex" onSubmit={handleForm}>
          <input
            className="form-control me-2"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <button className="btn btn-outline-light" type="submit">
            Add
          </button>
        </form>
        {/* Corrected mapping function */}
        {todos.map((todo, index) => (
          <div
            key={index}
            className="rounded mt-4 p-2 d-flex"
            style={{
              backgroundColor: todo.isCompleted ? "#87FC68" : "lightgray",
            }}
          >
            <div>{todo.task}</div>
            {/* Changed todos to todo */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList; // Exporting the ToDoList component
