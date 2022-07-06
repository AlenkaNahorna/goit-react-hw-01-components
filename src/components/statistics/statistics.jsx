import PropTypes from 'prop-types';
import {
  StatsListLabel,
  StatsListValue,
} from 'components/Profile/Profile.styled';
import {
  StatisticsList,
  StatisticsListItem,
  StatisticsSection,
  StatisticsTitle,
} from './Statistics.styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle> {title} </StatisticsTitle>}

      <StatisticsList>
        {stats.map(stat => (
          <StatisticsListItem
            key={stat.id}
            backgroundColor={getRandomHexColor()}
          >
            <StatsListLabel>{stat.label}</StatsListLabel>
            <StatsListValue>{stat.percentage}</StatsListValue>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
