export class Todo {
  instance;
  constructor(instance) {
    this.instance = instance;
  }

  async createTodo(todo) {
    return await this.instance.post('/todos', { data: { todo } });
  }

  async getTodos() {
    return await this.instance.get('/todos');
  }

  async updateTodo(id) {
    return await this.instance.put(`/todos/${id}`);
  }
}
