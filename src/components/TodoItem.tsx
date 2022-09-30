import React from "react";
import { inject, observer } from "mobx-react";

const TodoItem = (props) => {
  const { todo, todoStore } = props;
  return (
    <li className="todo-item">
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="checkbox"
          style={{ width: 20, height: 20 }}
          onChange={() => todo.changeDoneStatus(!todo.done)}
          checked={todo.done}
        />

        <p style={{ wordBreak: "break-all" }}>{todo.text}</p>
      </div>
      <button
        type="button"
        className="del-btn"
        onClick={() => todoStore.removeTodo(todo.id)}
      >
        delete
      </button>
    </li>
  );
};

export default inject("todoStore")(observer(TodoItem));
