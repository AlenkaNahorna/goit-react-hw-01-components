import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 20px;
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid ${p => p.theme.colors.secondaryColorShadeDark};
  background-color: ${p => p.theme.colors.secondaryColor};
`;

export const StatisticsTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const StatisticsList = styled.ul`
  display: flex;
  border-bottom-left-radius: ${p => p.theme.radii.normal};
  border-bottom-right-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const StatisticsListItem = styled.li`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid ${p => p.theme.colors.secondaryColorShadeDark};
  background-color: ${p => p.backgroundColor};
  &:hover {
    transform: scale(1.05);
  }
`;
