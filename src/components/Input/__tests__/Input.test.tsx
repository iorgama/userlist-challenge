import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../Input';
import { renderWithTheme } from '../../../utils/styledWrapper'; 

describe('#Input Component#', () => {
  it('should render with an initial value', () => {
    const mockHandleSearchUser = jest.fn();
    const user = 'Jane Doe';

    renderWithTheme(<Input searchUser={user} handleSearchUser={mockHandleSearchUser} />);

    const inputElement = screen.getByPlaceholderText('Digite o nome') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(user);
  });

  it('should call handleSearchUser when typing', () => {
    const mockHandleSearchUser = jest.fn();
    renderWithTheme(<Input searchUser="" handleSearchUser={mockHandleSearchUser} />);

    const inputElement = screen.getByPlaceholderText('Digite o nome') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'J' } });

    expect(mockHandleSearchUser).toHaveBeenCalledTimes(1);
  });
});
