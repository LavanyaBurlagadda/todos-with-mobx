import React from "react";
import { Link } from "react-router-dom";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Home = () => {
  return (
    <div>
      <h1>Todos List</h1>
      <TodoList />
      <AddTodo />
      <Link to="/about">Go to about</Link>
    </div>
  );
};

export default Home;
