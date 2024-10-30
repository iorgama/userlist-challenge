import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';
import { renderWithTheme } from '../../../../utils/styledWrapper'; 
import { User } from '../../../../models/User';

describe('#Card Component#', () => {
  it('should render correctly', () => {
    const mockUser: User = {
      id: 0,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '0000-0000',
    };

    const { container } = renderWithTheme(<Card user={mockUser} />);
    expect(container.querySelector('svg')).toBeInTheDocument(); 
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    expect(screen.getByText(mockUser.phone)).toBeInTheDocument();
  });
});
