import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithTheme } from '../../../utils/styledWrapper'; 
import HomePage from '../../HomePage';
import { useUserContext } from '../../../contexts/UsersContext';
import { mockUsers } from '../../../components/Users/List/__tests__/List.test';
import { useNavigate } from 'react-router-dom';

jest.mock('../../../contexts/UsersContext');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('../../../components/Skeleton/Skeleton', () => {
  return () => <div>SkeletonView...</div>; 
});

describe('#HomePage#', () => {

  const mockUseUserContext = useUserContext as jest.Mock;
  const mockNavigate = jest.fn();
  
  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('should render homepage with error state', () => {
    mockUseUserContext.mockReturnValue({
      status: 'error',
      users: [],
      view: 'card',
    });
    
    renderWithTheme(<HomePage />);
    expect(screen.getByText('Erro ao carregar informações')).toBeInTheDocument(); 
  });

  it('should render homepage with success state', () => {
    mockUseUserContext.mockReturnValue({
      status: 'success',
      users: mockUsers,
      view: 'card',
    });

    renderWithTheme(<HomePage />);

    expect(screen.queryByText('Jane Doe')).toBeInTheDocument(); 
    expect(screen.queryByText('John Doe')).toBeInTheDocument(); 
  });
});
