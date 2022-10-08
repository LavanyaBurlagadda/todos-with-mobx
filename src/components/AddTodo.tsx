import React, { useState } from "react";
import { runInAction } from "mobx";
import { inject, observer } from "mobx-react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

enum Languages {
  english = "en",
  telugu = "te",
}

const todosDataUrl =
  "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json";

const AddTodo = inject("todoStore")(
  observer((props) => {
    const { todoStore: store } = props;
    const { t } = useTranslation();

    const [lng, changeLng] = useState("en");

    const onChangeLng = (e: React.ChangeEvent<HTMLSelectElement>) => {
      changeLng(e.currentTarget.value);
      i18n.changeLanguage(e.currentTarget.value);
    };

    return (
      <>
        <div className="add-todo-container">
          <input
            type="text"
            placeholder={t("newTodo")}
            className="add-todo-input"
            value={store.newTodo}
            onChange={(e) =>
              runInAction(() => (store.newTodo = e.target.value))
            }
          />
          <button type="button" onClick={store.addTodo} className="add-btn">
            {t("add")}
          </button>
        </div>
        <div className="d-flex">
          <button
            type="button"
            className="load-btn"
            onClick={() => store.load(todosDataUrl)}
          >
            {t("loadSampleTodos")}
          </button>

          <button type="button" className="del-btn" onClick={store.clearTodos}>
            {t("clearTodos")}
          </button>

          <select value={lng} onChange={onChangeLng}>
            <option value={Languages.english}>English</option>
            <option value={Languages.telugu}>Telugu</option>
          </select>
        </div>
      </>
    );
  })
);

export default inject("todoStore")(observer(AddTodo));
