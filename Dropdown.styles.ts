import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;

  &:disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
`;
