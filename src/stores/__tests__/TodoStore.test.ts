import Store from "../TodoStore";

describe("TodoStore", () => {
  it("creates new todos", () => {
    const store = new Store();
    store.newTodo = "Todo-1";
    store.addTodo();
    store.newTodo = "Todo-2";
    store.addTodo();

    expect(store.todos.length).toBe(2);
  });

  it("clears checked todos", () => {
    const store = new Store();
    store.newTodo = "Todo-1";
    store.addTodo();
    store.newTodo = "Todo-2";
    store.addTodo();
    store.newTodo = "Todo-3";
    store.addTodo();

    store.todos[1].changeDoneStatus(true);
    store.todos[2].changeDoneStatus(true);
    store.todos.forEach((todo) => todo.done && store.removeTodo(todo.id));

    expect(store.todos.length).toBe(1);
  });
});
