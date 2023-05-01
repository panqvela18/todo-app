import React, { useState } from "react";
import Todo from "./Todo";
import Tabs from "./Tabs";
import Footer from "./Footer";

export default function TodoList({ theme }) {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("All");

  const filteredArray = () => {
    if (filter == "Active") {
      return todo.filter((task) => !task.completed);
    } else if (filter == "Completed") {
      return todo.filter((task) => task.completed);
    } else {
      return todo;
    }
  };

  const handleChange = (e) => {
    if (e.target.value == " ") {
      return " ".replace(" ", "");
    }
    setInputValue(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      return;
    }
    const task = {
      id: Math.random(),
      taskname: inputValue,
      completed: false,
    };

    setTodo([...todo, task]);
    setInputValue("");
  };
  const deleteTask = (id) => {
    const newTodoList = todo.filter((task) => {
      return task.id !== id;
    });

    setTodo(newTodoList);
  };

  const clearCompeleted = () => {
    const completedItems = todo.filter((task) => {
      return !task.completed;
    });
    setTodo(completedItems);
    setFilter("All")
  };

  const getActiveTask = () => {
    const activeTask = todo.filter((todo) => !todo.completed);
    return activeTask.length;
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          autoFocus
          onChange={handleChange}
          value={inputValue}
          className={`${
            theme === "light" ? "bg-white" : "bg-bgInput"
          } w-full mt-10 mb-6 rounded-5 h-12 outline-none text-placeholder-color text-xs px-14`}
          placeholder="Create a new todo…"
        />
      </form>
      <div className=" w-full rounded-5">
        {filteredArray().map((task) => {
          return (
            <Todo
              theme={theme}
              deleteTask={deleteTask}
              task={task}
              key={task.id}
            />
          );
        })}
        {todo.length !== 0 && (
          <div
            className={`flex items-center justify-between px-5 ${
              theme === "light"
                ? "bg-white shadow-box"
                : "bg-bgInput shadow-darkBox"
            } w-full h-64 `}
          >
            {" "}
            <p className="text-placeholder-color font-medium text-base">
              {getActiveTask()} items left
            </p>{" "}
            <p
              className="text-placeholder-color font-medium text-base"
              onClick={clearCompeleted}
            >
              Clear Completed
            </p>{" "}
          </div>
        )}
      </div>
      {todo.length !== 0 ? (
        <Tabs theme={theme} setFilter={setFilter} filter={filter} />
      ) : (
        ""
      )}
      {todo.length !== 0 ? (
        <Footer setTodo={setTodo} setFilter={setFilter} theme={theme} />
      ) : (
        ""
      )}
    </div>
  );
}
