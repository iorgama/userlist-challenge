import styled from 'styled-components';

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeights.heading};
  margin-top: ${({ theme }) => theme.spacing.large};

  @media (min-width: 769px) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export { Heading };
