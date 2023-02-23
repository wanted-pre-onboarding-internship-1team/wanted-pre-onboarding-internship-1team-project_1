import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import styled from 'styled-components';
import useApi from '../../hooks/useApi';
// import TodoService from '../../apis/todo';
import { api } from '../../apis/index';
import { useTodoContext } from '../../context/todoContext';

export default function TodoList({ currentFilter }) {
  const todoApi = api.todo;

  const { todos, setTodos } = useTodoContext();
  const [{ data }] = useApi(todoApi.getTodos(), []);

  useEffect(() => {
    if (!data) return;
    setTodos(data);
  }, [data]);

  function getFilteredItems(todos, filter) {
    if (filter === 0) {
      return todos;
    } else if (filter === 1) {
      return todos.filter(todo => todo.isCompleted === false);
    } else {
      return todos.filter(todo => todo.isCompleted === true);
    }
  }

  // const filteredTodos = [
  //   { id: 1, todo: 'todo1' },
  //   { id: 2, todo: 'todo2' },
  // ];
  const filteredTodos = getFilteredItems(todos, 0);

  return (
    <Section>
      <AddTodo />
      <TodoBody>
        {filteredTodos.map(todo => (
          <Todo key={todo.id} todoObj={todo} />
        ))}
      </TodoBody>
    </Section>
  );
}
const Section = styled.section`
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);
`;

const TodoBody = styled.ul`
  flex: 1 1 auto;
  overflow-y: auto;
`;
