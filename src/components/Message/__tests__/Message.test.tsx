import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Message from '../Message';
import { renderWithTheme } from '../../../utils/styledWrapper'; 

describe('#Message Component#', () => {
  it('should render correctly', () => {
    const message = 'Test Message';
    renderWithTheme(<Message message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
