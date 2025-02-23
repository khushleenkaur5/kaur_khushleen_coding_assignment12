import styled from 'styled-components';

export const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? 'grey' : 'blue')};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 10px;
  border: none;
  border-radius: 5px;
  
  &:hover {
    background-color: ${(props) => (props.disabled ? 'grey' : 'darkblue')};
  }
`;
