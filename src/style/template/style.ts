import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.neutralLight};
  min-height: 100vh;
  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.neutralLight};
  padding: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  margin: 0 auto;
  border-radius: 0;

  @media (min-width: 769px) {
    width: 90%;
    max-width: 800px;
    height: 480px;
    border-radius: ${({ theme }) => theme.spacing.small};
    box-shadow: ${({ theme }) => theme.shadows.default};
    overflow: auto;
  }

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.neutralLight};
    min-height: 100vh;
  }
`;

export { Container, Content };
