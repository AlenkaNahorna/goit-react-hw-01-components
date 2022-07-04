import styled from '@emotion/styled';

export const ProfileConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  border: 1px solid ${p => p.theme.colors.secondaryColorShadeDark};
  background-color: ${p => p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radii.normal};
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.img`
  display: block;
  height: 100px;
  margin-bottom: 20px;
  border-radius: ${p => p.theme.radii.round};
`;

export const Username = styled.p`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const UserTag = styled.p`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.secondaryColorShadeDark};
`;

export const UserLocation = styled.p`
  margin-bottom: 20px;
  color: ${p => p.theme.colors.secondaryColorShadeDark};
`;

export const StatsList = styled.ul`
  display: flex;
  border-bottom-left-radius: ${p => p.theme.radii.normal};
  border-bottom-right-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.secondaryColorShadeLight};
  overflow: hidden;
`;

export const StatsListItem = styled.li`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: ${p => p.theme.colors.secondaryColorShadeDark};
  border: 1px solid ${p => p.theme.colors.secondaryColorShadeDark};
`;

export const StatsListLabel = styled.p`
  margin-bottom: 5px;
`;

export const StatsListValue = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
