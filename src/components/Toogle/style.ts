import styled from 'styled-components';
import { Button as RACButton } from 'react-aria-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled(RACButton)<{ isActive: boolean }>`
  background-color: ${({ isActive, theme }) =>
    isActive ? `${theme.colors.primary.dark}` : `${theme.colors.primary.base}`};
  color: ${({ theme }) => theme.colors.neutralLight};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing.small};
  transition: background-color 0.3s;

  & > svg {
    display: flex;
  }

  &:focus {
    outline: none;
  }
`;

export { Container, Button };
