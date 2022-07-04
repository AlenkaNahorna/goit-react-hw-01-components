import styled from '@emotion/styled';

export const TransactionHistoryContainer = styled.table`
  padding: 10px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.secondaryColor};
`;

export const TableHead = styled.th`
  width: 200px;
  height: 30px;
  padding: 4px 0;
  background-color: ${p => p.theme.colors.accentColorBlue};
`;

export const TableData = styled.td`
  height: 30px;
  padding: 4px 0;
  text-align: center;
  background-color: ${p => p.theme.colors.secondaryColorShadeLight};
`;
