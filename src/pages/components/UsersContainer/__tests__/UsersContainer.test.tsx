import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UsersContainer from '../UsersContainer';
import { renderWithTheme } from '../../../../utils/styledWrapper'; 
import { mockUsers } from '../../../../components/Users/List/__tests__/List.test';

describe('#UsersContainer Component#', () => {

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('should render correctly with card view', () => {

    renderWithTheme(<UsersContainer users={mockUsers} view='card' />);

    expect(screen.queryByText('Jane Doe')).toBeInTheDocument(); 
    expect(screen.queryByText('John Doe')).toBeInTheDocument(); 
  });

  it('should render correctly with table view', () => {

    renderWithTheme(<UsersContainer users={mockUsers} view='table' />);

    expect(screen.queryByText('Jane Doe')).toBeInTheDocument(); 
    expect(screen.queryByText('John Doe')).toBeInTheDocument(); 
  });


  it('should render correctly when there are no users', () => {
    renderWithTheme(<UsersContainer users={[]} view='table' />);

    expect(screen.queryByText('Não há dados para serem exibidos')).toBeInTheDocument(); 
  });
});
