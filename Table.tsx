import React from 'react';
import { TableProps } from './Table.types';
import TableFooter from './TableFooter';
import styled from 'styled-components';

// Styled Table Components
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid black;
`;

const StyledTh = styled.th`
  border: 1px solid black;
  padding: 10px;
  background-color: #f2f2f2;
`;

const StyledTd = styled.td`
  border: 1px solid black;
  padding: 10px;
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Table: React.FC<TableProps> = ({ headers, rows, footer }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <StyledTh key={index}>{header}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <StyledTr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <StyledTd key={cellIndex}>{cell}</StyledTd>
            ))}
          </StyledTr>
        ))}
      </tbody>
      <TableFooter footer={footer} />
    </StyledTable>
  );
};

export default Table;
