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

  const handleForm = (event) => {
    event.preventDefault();
    if (!task) {
      alert("Please provide a valid task");
      return;
    }
    setTodos([...todos, { task: task, isCompleted: true }]); // Updated to correctly update todos state
    setTask("");
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
            <div className=" me -auto">
              {todo.task}{" "}
              <i
                className={`h5 me-2 ${
                  todo.isCompleted ? "bi bi-check-square" : "bi bi-square"
                }`}
              ></i>
              <i className="bi bi-trash text-danger h5"></i>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList; // Exporting the ToDoList component
