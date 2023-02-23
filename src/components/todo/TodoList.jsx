import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import styled from 'styled-components';
import { api } from '../../apis'; // index.js 는 진입점이므로 생략 가능
import { useTodoContext } from './TodoContext';
import { useFilterContext } from './FilterContext';

export default function TodoList() {
  const { todos, setTodos } = useTodoContext();
  const { currentFilter, filterTitle } = useFilterContext();

  useEffect(() => {
    api.todo.getTodos().then(res => {
      setTodos(res.data);
      setFilteredTodos(getFilteredItems(res.data, currentFilter));
    });
  }, []);

  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(getFilteredItems(todos, currentFilter));
  }, [currentFilter]);

  function getFilteredItems(todos, filter) {
    if (filterTitle(filter) === 'active') {
      return todos.filter(todo => todo.isCompleted === false);
    }
    if (filterTitle(filter) === 'completed') {
      return todos.filter(todo => todo.isCompleted === true);
    }
    return todos;
  }

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
