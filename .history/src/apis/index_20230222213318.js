import AuthService from './auth';
import instance from './instance';
import TodoService from './todo';

const todo = new TodoService(instance);
const auth = new AuthService(instance);

export const api = {
  todo,
  auth,
};
