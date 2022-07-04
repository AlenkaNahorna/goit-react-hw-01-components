import PropTypes from 'prop-types';
import {
  StatsListLabel,
  StatsListValue,
} from 'components/profile/profile.styled';
import {
  StatisticsList,
  StatisticsListItem,
  StatisticsSection,
  StatisticsTitle,
} from './statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle> {title} </StatisticsTitle>}

      <StatisticsList>
        {stats.map(stat => (
          <StatisticsListItem key={stat.id}>
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
