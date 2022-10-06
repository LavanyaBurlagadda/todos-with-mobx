import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useTranslation } from "react-i18next";

import "./App.css";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <h1>{t("appTitle")}</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
