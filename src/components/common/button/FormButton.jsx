import React from 'react';
import styled from 'styled-components';

export default function FormButton({ testId, disabled, opacity, title }) {
  return (
    <Button
      data-testid={testId}
      disabled={disabled}
      style={{ opacity: opacity }}>
      {title}
    </Button>
  );
}

const Button = styled.button`
  width: 130px;
  height: 50px;
  padding: 10px;
  margin: 10px auto;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 600;
  background-color: var(--color-darkblue);
  color: var(--color-white);

  &:hover {
    cursor: pointer;
  }
`;
