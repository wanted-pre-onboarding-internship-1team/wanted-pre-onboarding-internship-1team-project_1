import { useReducer } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      const { todoList } = action;

      return todoList;
    case 'ADD':
      const { newTodo } = action;

      return [...state, newTodo];
    case 'MODIFY':
      const { updated } = action;

      return state.map(todo => (todo.id === updated.id ? updated : todo));
    case 'DELETE':
      const { id } = action;

      return state.filter(todo => todo.id !== id);
    default:
      throw new Error(`알 수 없는 액션 타입입니다.`);
  }
};

const useTodo = initialState => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const setTodos = todoList => {
    dispatch({ type: 'SET', todoList });
  };

  const addTodo = newTodo => {
    dispatch({ type: 'ADD', newTodo });
  };

  const updateTodo = updated => {
    dispatch({ type: 'MODIFY', updated });
  };

  const deleteTodo = id => {
    dispatch({ type: 'DELETE', id });
  };

  return [{ setTodos, addTodo, updateTodo, deleteTodo }, todos];
};

export default useTodo;
