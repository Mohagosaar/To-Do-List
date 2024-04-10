import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList.jsx";

import axios from "axios";
import "./App.css";

const App = () => {
  const [toDoList, setTodoList] = useState([]);

  const getTodoData = () => {
    axios
      .get("/api/todo")
      .then((response) => {
        console.log("data response", response.data);
        setTodoList(response.data);
        console.log("Getting data from Database", toDoList);
      })
      .catch((error) => {
        console.log("error in GET", error);
        alert("Something went wrong in GET");
      });
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <div>
      <ToDoList getdata_todos={toDoList} />
    </div>
  );
};

export default App;
