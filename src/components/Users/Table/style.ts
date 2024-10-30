import styled from 'styled-components';

const Wrapper = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 2px solid ${({ theme }) => theme.colors.primary.dark};
    padding: ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
export { Wrapper };
