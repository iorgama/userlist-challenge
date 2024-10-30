import { FC } from 'react';
import { Heading } from './style';

const Message: FC<{ message: string }> = ({ message }) => {
  return (
    <Heading>{message}</Heading>
  )
};

export default Message;