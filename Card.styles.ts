import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  text-align: center; /* Center content */
`;

export const CardTitle = styled.h3`
  margin-bottom: 8px;
`;

export const CardBody = styled.p`
  font-size: 14px;
`;

export const CardFooter = styled.div`
  margin-top: 12px;
  font-size: 12px;
  color: #777;
`;

export const CardImage = styled.img`
  width: 200px;       
  height: auto;       
  border-radius: 8px;
  margin-bottom: 12px;
`;
