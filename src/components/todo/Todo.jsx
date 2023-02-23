import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
import TodoInput from '../../components/common/TodoInput';

export default function Todo({ todoObj, onUpdate, onDelete }) {
  let isModify = false;
  return (
    <TodoLi key='1'>
      <CheckBox type='checkbox' />
      {isModify ? (
        <Form>
          <TodoInput testId='modify-input' />
          <Button type='submit' data-testid='submit-button'>
            제출
          </Button>
          <Button type='button' data-testid='cancel-button'>
            취소
          </Button>
        </Form>
      ) : (
        <>
          <TodayWork>{todoObj.todo}</TodayWork>
          <Span>
            <Button data-testid='modify-button'>수정</Button>
            <Button data-testid='delete-button'>
              <FaTrashAlt />
            </Button>
          </Span>
        </>
      )}
    </TodoLi>
  );
}

const TodoLi = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.1rem 0;
  color: var(--color-text);
  background-color: var(--color-white);
`;

const CheckBox = styled.input`
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const TodayWork = styled.label`
  flex: 1 1;
  margin-left: 10px;
  font-size: 20px;
`;

const Form = styled.form`
  position: absolute;
  left: 50px;
`;

const Button = styled.button`
  background-color: var(--color-lightgrey);
  opacity: 0.5;

  &:hover {
    cursor: pointer;
  }
`;
const Span = styled.span``;
