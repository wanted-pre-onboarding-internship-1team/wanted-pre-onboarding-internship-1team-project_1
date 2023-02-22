export default class TodoService {
  instance;
  constructor(instance) {
    this.instance = instance;
  }

  async createTodo(todo) {
    return await this.instance.post('/todos', { todo });
  }

  async getTodos() {
    return await this.instance.get('/todos');
  }

  async updateTodo(id, todo, isCompleted) {
    return await this.instance.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });
  }

  async deleteTodo(id) {
    return await this.instance.delete(`/todos/${id}`);
  }
}
