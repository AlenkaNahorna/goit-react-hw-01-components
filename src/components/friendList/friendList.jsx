import { Username } from 'components/Profile/Profile.styled';
import PropTypes from 'prop-types';
import {
  FriendsAvatar,
  FriendsList,
  FriendsListItem,
  OnLineStatus,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendsListItem key={friend.id}>
          <OnLineStatus status={friend.isOnline}></OnLineStatus>
          <FriendsAvatar src={friend.avatar} alt="User avatar" />
          <Username>{friend.name}</Username>
        </FriendsListItem>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
