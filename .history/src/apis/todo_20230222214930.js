export default class TodoService {
  instance;
  constructor(instance) {
    this.instance = instance;
  }

  /**
   *
   * @param {string} todo
   * @returns Promise<AxiosResponse<>>
   */
  async createTodo(todo) {
    return await this.instance.post('/todos', { todo });
  }

  async getTodos() {
    return await this.instance.get('/todos');
  }

  /**
   *
   * @param {string} id
   * @param {string} todo
   * @param {boolean} isCompleted
   * @returns Promise<AxiosResponse<>>
   */
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
