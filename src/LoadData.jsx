import { useState, useEffect } from "react";
import axios from "axios";

const LoadData = () => {
  const [todos, setTodos] = useState([]);
  //get
  const loadServer = () => {
    axios
      .get("/api/todo")
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
      })
      .catch((error) => {
        console.log("Error GET/", error);
      });
  };
  //   console.log("Todos Data", todos);

  //update
  const changeTaskStatus = (id) => {
    console.log("id", id);
    axios
      .put(`/api/todo/${id}`)

      .then((response) => {
        console.log(response.data);
        loadServer();
      })
      .catch((error) => {
        console.log("error in PUT", error);
        alert("something wrong in PUT");
      });
  };
  const deleteTask = (id) => {
    axios
      .delete(`/api/todo/${id}`)
      .then((response) => {
        console.log(response.data);
        loadServer();
      })
      .catch((error) => {
        console.log("error in Delete", error);
        alert("something wrong in delte");
      });
  };

  useEffect(() => {
    loadServer();
  }, []);

  return (
    <div className="container">
      {todos.map((todoList) => {
        return (
          <div
            key={todoList.taskid}
            className="rounded mt-4 p-2 d-flex"
            style={{
              backgroundColor: todoList.isComplete ? "#87FC68" : "lightgray",
            }}
          >
            <div className="me-auto">{todoList.taskName}</div>
            <div>
              {/* <i
                className="h5 me2" + ({
                  todoList.isComplete ? "bi bi-check-square" : "bi bi-square"
                })
              ></i> */}
              <i
                className={
                  "h5 me2 " +
                  (todoList.isComplete ? "bi bi-check-square" : "bi bi-square")
                }
                style={{ cursor: "pointer" }}
                onClick={() => changeTaskStatus(todoList.taskid)}
              ></i>

              <i
                className="bi bi-trash text-danger h5"
                style={{ cursor: "pointer" }}
                onClick={() => deleteTask(todoList.taskid)}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LoadData;
