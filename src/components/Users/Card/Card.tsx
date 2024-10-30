import { FC } from 'react';
import { User } from '../../../models/User';
import { Wrapper, Heading, Paragraph, ContactItem } from './style';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import theme from '../../../style/theme/theme';

const Card: FC<{ user: User }> = ({ user }) => {
  return (
    <Wrapper>
      <Heading>{user.name}</Heading>
      <ContactItem>
        <FaEnvelope size={16} color={theme.colors.primary.dark} />
        <Paragraph> {user.email}</Paragraph>
      </ContactItem>
      <ContactItem>
        <FaPhone size={16} color={theme.colors.primary.dark} />
        <Paragraph>{user.phone}</Paragraph>
      </ContactItem>
    </Wrapper>
  )
};

export default Card;


