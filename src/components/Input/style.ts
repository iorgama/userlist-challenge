import styled from 'styled-components';
import { Input } from 'react-aria-components';

const StyledInput = styled(Input)`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary.dark};
  border-radius: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.md};
  width: 100%;
  margin-right: 16px;
  box-shadow: ${({ theme }) => theme.shadows.default};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.base};
    outline: none;
  }
`;

export { StyledInput };
