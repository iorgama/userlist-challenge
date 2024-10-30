import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from '../List';
import { renderWithTheme } from '../../../../utils/styledWrapper'; 

export const mockUsers = [ 
  {
    id: 0,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '0000-0000',
  },{
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1111-1111',
  }]

describe('#List Component#', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<List users={mockUsers} />);
    expect(container.querySelector('svg')).toBeInTheDocument(); 
    expect(screen.getByText(mockUsers[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockUsers[1].email)).toBeInTheDocument();
    expect(screen.getByText(mockUsers[0].phone)).toBeInTheDocument();
  });
});