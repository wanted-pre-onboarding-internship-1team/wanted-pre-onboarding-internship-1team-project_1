import React from 'react';
import styled from 'styled-components';

export default function HeadButton({ clickFunc, title, isCurrent }) {
  return (
    <Button isCurrent={isCurrent} onClick={clickFunc}>
      {title}
    </Button>
  );
}

const Button = styled.button`
  font-size: 25px;
  margin: 20px 10px 15px 10px;
  background-color: transparent;
  text-transform: capitalize;
  color: ${({ isCurrent }) => {
    return isCurrent ? 'var(--color-darkblue)' : 'var(--color-darkgrey)';
  }};
  opacity: ${({ isCurrent }) => {
    return isCurrent ? 1 : 0.3;
  }};
  font-weight: bold;

  &:hover {
    opacity: 1;
    color: var(--color-darkblue);
    cursor: pointer;
  }
`;
