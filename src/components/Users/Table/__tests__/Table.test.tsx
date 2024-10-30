import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from '../Table';
import { renderWithTheme } from '../../../../utils/styledWrapper'; 
import { mockUsers } from '../../List/__tests__/List.test';

describe('#Table Component#', () => {
  it('should render correctly', () => {

    const { container } = renderWithTheme(<Table users={mockUsers} />);
    expect(container.querySelectorAll('tr').length).toBe(3); 
    expect(screen.getByText(mockUsers[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockUsers[1].email)).toBeInTheDocument();
    expect(screen.getByText(mockUsers[0].phone)).toBeInTheDocument();
  
  });
});
