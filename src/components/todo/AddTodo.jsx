import React, { useState } from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import styled from 'styled-components';
import { api } from '../../apis';
import TodoInput from '../../components/common/TodoInput';
import { useTodoContext } from './TodoContext';

export default function AddTodo() {
  const { addTodo } = useTodoContext();
  const [content, setContent] = useState('');
  const handleChange = event => {
    setContent(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    api.todo.createTodo(content).then(response => {
      addTodo(response.data);
      setContent('');
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TodoInput
        testId='new-todo-input'
        placeholder='today to do'
        changeFunc={handleChange}
        value={content}
      />
      <Button data-testid='new-todo-add-button'>
        <HiOutlinePlusCircle />
      </Button>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  padding: 1.4rem 1rem;
  background-color: var(--color-bg-dark);
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: var(--color-darkgrey);
`;
