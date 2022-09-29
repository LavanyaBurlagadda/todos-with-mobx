import React from "react";
import { inject, observer } from "mobx-react";
import Todo from "../stores/models/Todo";
import TodoItem from "./TodoItem";

const TodoItemsList = inject("todoStore")(
  observer((props) => {
    const { todoStore: store } = props;
    return (
      <ul className="todo-items-list-container">
        {store.filteredTodoList.map((t: Todo) => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </ul>
    );
  })
);

export default TodoItemsList;
