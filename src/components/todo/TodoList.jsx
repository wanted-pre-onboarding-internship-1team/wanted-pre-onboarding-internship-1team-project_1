import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import styled from 'styled-components';

export default function TodoList({ currentFilter }) {
  const filteredTodos = [
    { id: 1, todo: 'todo1' },
    { id: 2, todo: 'todo2' },
  ];

  return (
    <Section>
      <TodoBody>
        {filteredTodos.map(todo => (
          <Todo key={todo.id} todoObj={todo} />
        ))}
      </TodoBody>
      <AddTodo />
    </Section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === 0) {
    return todos;
  } else if (filter === 1) {
    return todos.filter(todo => todo.isCompleted === false);
  } else {
    return todos.filter(todo => todo.isCompleted === true);
  }
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
