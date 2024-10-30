import  { FC} from 'react';
import { StyledInput } from './style';

interface InputProps {
  searchUser: string;
  handleSearchUser: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ searchUser, handleSearchUser }) => {
  return (
    <StyledInput
      type="text"
      placeholder="Digite o nome"
      value={searchUser}
      onChange={handleSearchUser}
    />
  );
};

export default Input;
