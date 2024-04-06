import { useState } from "react";
import "./App.css";

const App = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder="what is the Task title" />
          </div>
          <div className="todo-input-item">
            <label>Descripton</label>
            <input type="text" placeholder="what is the task description" />
          </div>

          <div className="todo-input-item">
            <button type="button" className="primary-btn">
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            type="button"
            className={`secondry-btn ${isCompleted === false && "active"}`}
            onClick={() => setIsCompleted(false)}
          >
            Todo
          </button>
          <button
            className={`secondry-btn ${isCompleted === true && "active"}`}
            onClick={() => setIsCompleted(true)}
          >
            Completed
          </button>
        </div>
        <div className="to-do-list">
          <div className="todo-list-item">
            <h1>Task1</h1>
            <p>description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
