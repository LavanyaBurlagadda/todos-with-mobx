import { action, observable } from "mobx";

class Todo {
  @observable done = false;
  @observable text: string;
  @observable id: number;
  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }

  @action.bound
  changeDoneStatus(value: boolean) {
    this.done = value;
  }
}

export default Todo;
