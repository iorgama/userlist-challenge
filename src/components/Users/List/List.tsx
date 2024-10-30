

import { FC } from 'react';
import { User } from '../../../models/User';
import { Wrapper } from './style';
import Card from '../Card/Card';

const List: FC<{users: User[] }> = ({ users }) => (
  <Wrapper>
    {users.map(user => <Card key={user.id} user={user} />)}
  </Wrapper>
);

export default List;

