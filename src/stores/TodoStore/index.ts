import { action, computed, observable } from "mobx";
import { filterConst } from "../../constants/filterConst";
import Todo from "../models/Todo";

class Store {
  @observable.deep todos: Todo[] = [];
  @observable newTodo = "";
  @observable n = 0;
  @observable activeFilter = filterConst.all;
  @observable loadedSampleData = false;

  @action.bound
  changeFilter(value: string) {
    this.activeFilter = value;
  }

  @action.bound
  addTodo = () => {
    if (this.newTodo.trim() !== "") {
      this.todos.push(new Todo(this.n++, this.newTodo));
      this.newTodo = "";
    }
  };

  @action.bound
  removeTodo(id: number | string) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  @action.bound
  async load(url: string) {
    if (!this.loadedSampleData) {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.todos.push(...data.map((t: Todo) => new Todo(this.n++, t.text)));
        });
      this.loadedSampleData = true;
    }
  }

  @action.bound
  clearTodos() {
    this.todos = [];
    this.n = 0;
    this.loadedSampleData = false;
  }

  @computed get filteredTodoList() {
    if (this.activeFilter === filterConst.completed)
      return this.todos.filter((t) => t.done);
    if (this.activeFilter === filterConst.pending)
      return this.todos.filter((t) => !t.done);
    return this.todos;
  }
}

export default Store;
