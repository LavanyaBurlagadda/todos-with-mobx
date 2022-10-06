import React from "react";
import { inject, observer } from "mobx-react";
import { filterConst } from "../constants/filterConst";
import TodoItemsList from "./TodoItemsList";
import { useTranslation } from "react-i18next";

const TodoList = inject("todoStore")(
  observer((props) => {
    const { todoStore: store } = props;
    const currFilter = store.activeFilter;
    const { t } = useTranslation();

    return (
      <div className="todo-list-container">
        {store.todos.length === 0 ? (
          <div className="no-todos-container">
            <p>{t("getStarted")}</p>
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
                {t("filters.completed")}
              </button>
              <button
                type="button"
                onClick={() => store.changeFilter(filterConst.pending)}
                className={`filter-btn ${
                  currFilter === filterConst.pending && "active-filter-btn"
                }`}
              >
                {t("filters.pending")}
              </button>
              <button
                type="button"
                onClick={() => store.changeFilter(filterConst.all)}
                className={`filter-btn ${
                  currFilter === filterConst.all && "active-filter-btn"
                }`}
              >
                {t("filters.all")}
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
