import React from "react";
import { inject, observer } from "mobx-react";
import { filterConst } from "../constants/filterConst";
import TodoItemsList from "./TodoItemsList";

const TodoList = inject("todoStore")(
  observer((props) => {
    const { todoStore: store } = props;
    const currFilter = store.activeFilter;

    return (
      <div className="todo-list-container">
        {store.todos.length === 0 ? (
          <div className="no-todos-container">
            <p>Get started by adding a Todo</p>
          </div>
        ) : (
          <>
            <div className="d-flex sticky-bar">
              <button
                type="button"
                onClick={() => store.changeFilter(filterConst.completed)}
                className={`filter-btn ${
                  currFilter === filterConst.completed && "active-filter-btn"
                }`}
              >
                Completed
              </button>
              <button
                type="button"
                onClick={() => store.changeFilter(filterConst.pending)}
                className={`filter-btn ${
                  currFilter === filterConst.pending && "active-filter-btn"
                }`}
              >
                Todo
              </button>
              <button
                type="button"
                onClick={() => store.changeFilter(filterConst.all)}
                className={`filter-btn ${
                  currFilter === filterConst.all && "active-filter-btn"
                }`}
              >
                All
              </button>
            </div>
            <TodoItemsList />
          </>
        )}
      </div>
    );
  })
);

export default TodoList;
