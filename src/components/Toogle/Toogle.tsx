import  { Dispatch, FC, SetStateAction, useState } from 'react';
import { Container, Button } from './style';
import theme from '../../style/theme/theme';
import { FaList, FaTable } from 'react-icons/fa';

export type ViewMode = 'card' | 'table';

interface ToggleProps {
  setView: Dispatch<SetStateAction<ViewMode>>;
}

const Toggle: FC<ToggleProps> = ({ setView }) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleToggle = () => {
    setIsActive(prevState => !prevState);
    setView(isActive ? 'table' : 'card')
  };

  return (
    <Container>
      <Button isActive={isActive} onPress={handleToggle}>
        {isActive ? <FaList size={20} color={theme.colors.neutralLight} /> : <FaTable size={20} color={theme.colors.neutralLight} />}
      </Button>
    </Container>
  );
};

export default Toggle;
