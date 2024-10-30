

import { FC } from 'react';
import { User } from '../../../models/User';
import { Wrapper } from './style';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import theme from '../../../style/theme/theme';

const Table: FC<{users: User[] }> = ({ users }) => (
  <Wrapper>
    <thead>
      <tr>
        <th>Nome</th>
        <th><FaEnvelope size={20} color={theme.colors.primary.dark} /></th>
        <th><FaPhone size={20} color={theme.colors.primary.dark} /></th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>
      ))}
    </tbody>
  </Wrapper>
);

export default Table;

