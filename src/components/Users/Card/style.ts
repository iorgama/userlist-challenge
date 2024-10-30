import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary.dark};
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-radius: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.medium};
  box-shadow: ${({ theme }) => theme.shadows.card};
  color: ${({ theme }) => theme.colors.primary.dark};

  @media (min-width: 769px) {
    flex: 1 0 300px;
    max-width: calc(50% - ${({ theme }) => theme.spacing.small});
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: 0;
  line-height: ${({ theme }) => theme.lineHeights.heading};

  @media (min-width: 769px) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin: 0;
  color: ${({ theme }) => theme.colors.primary.dark};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};

  @media (min-width: 769px) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    margin-right: ${({ theme }) => theme.spacing.small};
  }
`;

export { Wrapper, Heading, Paragraph, ContactItem };
