import user from 'userData/user.json';
import data from 'userData/data.json';
import friends from 'userData/friends.json';
import transactions from 'userData/transactions.json';
import { Profile } from '../profile/profile';
import { Statistics } from '../statistics/statistics';
import { FriendList } from '../friendList/friendList';
import { TransactionHistory } from '../transactionHistory/transactionHistory';
import { AppContainer } from './App.styled';

export const App = () => {
  return (
    <AppContainer>
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
    </AppContainer>
  );
};