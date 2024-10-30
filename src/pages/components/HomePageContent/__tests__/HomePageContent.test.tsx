import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePageContent from '../HomePageContent';
import { renderWithTheme } from '../../../../utils/styledWrapper'; 
import { useUserContext } from '../../../../contexts/UsersContext';
import { mockUsers } from '../../../../components/Users/List/__tests__/List.test';

jest.mock('../../../../contexts/UsersContext');
jest.mock('../../../../components/Skeleton/Skeleton', () => {
  return () => <div>SkeletonView...</div>; 
});


describe('#HomePageContent Component#', () => {
  const mockUseUserContext = useUserContext as jest.Mock;

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('should render idle state correctly', () => {
    mockUseUserContext.mockReturnValue({
      status: 'idle',
      users: [],
      view: 'card',
    });
    const { container } = renderWithTheme(<HomePageContent />);
    expect(container).toBeEmptyDOMElement(); 
  });

  it('should render error state correctly', () => {
    mockUseUserContext.mockReturnValue({
      status: 'error',
      users: [],
      view: 'card',
    });

    renderWithTheme(<HomePageContent />);

    expect(screen.getByText('Erro ao carregar informações')).toBeInTheDocument(); 
  });

  it('should render loading state correctly', () => {
    mockUseUserContext.mockReturnValue({
      status: 'loading',
      users: [],
      view: 'card',
    });

    renderWithTheme(<HomePageContent />);

    expect(screen.queryByText('Erro ao carregar informações')).not.toBeInTheDocument(); 
  });

  it('should render success state correctly', () => {
    mockUseUserContext.mockReturnValue({
      status: 'success',
      users: mockUsers,
      view: 'card',
    });

    renderWithTheme(<HomePageContent />);

    expect(screen.queryByText('Jane Doe')).toBeInTheDocument(); 
    expect(screen.queryByText('John Doe')).toBeInTheDocument(); 
  });


  it('should render success state correctly when there are no users', () => {
    mockUseUserContext.mockReturnValue({
      status: 'success',
      users: [],
      view: 'card',
    });

    renderWithTheme(<HomePageContent />);

    expect(screen.queryByText('Não há dados para serem exibidos')).toBeInTheDocument(); 
  });

});
