export class Todo {
  instance;
  constructor(instance) {
    this.instance = instance;
  }

  async createTodo(todo) {
    return await this.instance.post('/todos', { data: { todo } });
  }

  async geteTodos() {
    return await this.instance.get('/todos');
  }
}
