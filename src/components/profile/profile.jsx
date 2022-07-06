import PropTypes from 'prop-types';
import {
  ProfileConteiner,
  StatsList,
  StatsListItem,
  StatsListLabel,
  StatsListValue,
  UserAvatar,
  UserDescription,
  UserLocation,
  Username,
  UserTag,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileConteiner>
    <UserDescription>
      <UserAvatar src={avatar} alt="User avatar" />
      <Username>{username}</Username>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </UserDescription>

    <StatsList>
      <StatsListItem>
        <StatsListLabel>Followers</StatsListLabel>
        <StatsListValue>{stats.followers}</StatsListValue>
      </StatsListItem>
      <StatsListItem>
        <StatsListLabel>Views</StatsListLabel>
        <StatsListValue>{stats.views}</StatsListValue>
      </StatsListItem>
      <StatsListItem>
        <StatsListLabel>Likes</StatsListLabel>
        <StatsListValue>{stats.likes}</StatsListValue>
      </StatsListItem>
    </StatsList>
  </ProfileConteiner>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
