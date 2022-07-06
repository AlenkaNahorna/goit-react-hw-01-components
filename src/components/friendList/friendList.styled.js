import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  margin-bottom: 20px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const FriendsListItem = styled.li`
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid ${p => p.theme.colors.secondaryColorShadeDark};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${props => props.theme.colors.secondaryColor};
`;

export const OnLineStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p =>
    p.status ? p.theme.colors.isOnline : p.theme.colors.notOnline};
`;

export const FriendsAvatar = styled.img`
  display: block;
  width: 50px;
`;
