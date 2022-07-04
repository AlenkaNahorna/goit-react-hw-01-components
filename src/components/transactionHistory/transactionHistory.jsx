import PropTypes from 'prop-types';
import {
  TableData,
  TableHead,
  TransactionHistoryContainer,
} from './transactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryContainer>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryContainer>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
