import { useState } from "react";

function App() {
  return (
    <div className="to-do-list">
      <nav>
        <div className="logo">
          <img src="/images/logo.png"></img>
        </div>
        <div className="title">
          <h1>To Do List app</h1>
        </div>
      </nav>
      <div className="task-registration">
        <form>
          <input type="text" placeholder="Enter Task"></input>
          <input type="submit" value="Add Task" />
        </form>
      </div>
    </div>
  );
}

export default App;
