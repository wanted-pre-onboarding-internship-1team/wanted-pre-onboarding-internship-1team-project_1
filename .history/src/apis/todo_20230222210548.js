export class Todo {
  instance;
  constructor(instance) {
    this.instance = instance;
  }

  async createTodo(todo) {
    return this.instance.post('/todos', { data: { todo } });
  }
}
