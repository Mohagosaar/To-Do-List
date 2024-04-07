import { useState } from "react";
import "./App.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

const App = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [allTodos, setAlltodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddToDo = () => {
    let newTodItem = {
      title: newTitle,
      Description: newDescription,
    };
    let updateToDoData = [...allTodos];
    updateToDoData.push(newTodItem);
    setAlltodos(updateToDoData);
  };
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              placeholder="what is the Task title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="todo-input-item">
            <label>Descripton</label>
            <input
              type="text"
              placeholder="what is the task description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>

          <div className="todo-input-item">
            <button
              type="button"
              onClick={handleAddToDo}
              className="primary-btn"
            >
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
          {allTodos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <h3>{item.title}</h3>
                <p>{item.Description}</p>
                <div>
                  <AiOutlineDelete className="icon" />
                  <BsCheckLg className="check-icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
