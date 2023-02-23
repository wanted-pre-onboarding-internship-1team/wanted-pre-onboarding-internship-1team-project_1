import React from 'react';
import styled from 'styled-components';

export default function FormInput({
  testId,
  name,
  type,
  changeFunc,
  placeholder,
}) {
  return (
    <Input
      data-testid={testId}
      name={name}
      type={type}
      onChange={changeFunc}
      placeholder={placeholder}
    />
  );
}

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
`;
