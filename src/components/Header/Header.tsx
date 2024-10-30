import { FC } from 'react';
import { Helmet } from 'react-helmet';

const Header: FC = () => {
  return (
      <Helmet>
          <title>Desafio de Codificação</title>
          <meta name="description" content="Teste Técnico para Desenvolvedor Frontend" />
      </Helmet>
  );
};

export default Header;
