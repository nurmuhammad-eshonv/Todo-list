import React, { useState } from "react";
import "./TodoList.css";
import List from "../list/List";

function TodoList() {
  const [value, setValue] = useState("");
  const [list, updateList] = useState([]);
  const [error, setError] = useState("");
  const [sum1, set1Sum] = useState(null);

  function handleSubmit() {
    if (value.trim() === "") {
      setError("Todo item cannot be empty.");
      return;
    }
    if (value.length > 20) {
      setError("Todo item cannot exceed 20 characters.");
      return;
    }

    set1Sum(sum1 + 1);
    updateList([...list, { item: value }]);
    setValue("");
    setError("");
  }

  function handleDelete(index) {
    const newList = list.filter((_, i) => i !== index);
    updateList(newList);
    set1Sum(sum1 - 1);
  }

  function handleDeleteAll() {
    updateList([]);
    set1Sum(0);
  }

  function handleChange(e) {
    setValue(e.target.value);
    if (e.target.value.length > 20) {
      setError("Todo item cannot exceed 20 characters.");
    } else {
      setError("");
    }
  }

  return (
    <div className="wrapper">
      <h2 className="title">Todo App</h2>
      <div className="input-wr">
        <input
          onChange={handleChange}
          className="form"
          type="text"
          placeholder="Add your new todo"
          value={value}
        />
        <button onClick={handleSubmit} type="submit" className="button">
          +
        </button>
      </div>
      {error && <p className="error">{error}</p>}
      <List list={list} onDelete={handleDelete} deleteAll={handleDeleteAll} />
      <div className="btn-wrapper">
        <button className="sum-btn">you {sum1} to do</button>
        <button onClick={handleDeleteAll} className="sum-btn">clear all</button>
      </div>
    </div>
  );
}

export default TodoList;
