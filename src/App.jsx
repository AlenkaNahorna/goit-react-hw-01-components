import user from 'Data/user.json';
import data from 'Data/data.json';
import friends from 'Data/friends.json';
import transactions from 'Data/transactions.json';
import { Profile } from './components/profile/profile';
import { Statistics } from './components/statistics/statistics';
import { FriendList } from './components/friendList/friendList';
import { TransactionHistory } from './components/transactionHistory/transactionHistory';
import { Container } from './components/Container/Container.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
