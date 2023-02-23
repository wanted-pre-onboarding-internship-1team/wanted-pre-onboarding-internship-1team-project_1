import React from 'react';
import styled from 'styled-components';

export default function TodoInput({ testId, placeholder, value, changeFunc }) {
  return (
    <Input
      type='text'
      //   data-testid={testId}
      placeholder={placeholder}
      //   value={value}
      //   onChange={changeFunc}
    />
  );
}

const Input = styled.input`
  flex: 1 0 auto;
  font-size: 20px;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
