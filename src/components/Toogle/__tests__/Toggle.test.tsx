import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Toogle from '../Toogle';
import { renderWithTheme } from '../../../utils/styledWrapper'; 

describe('#Toogle Component#', () => {
  it('should render with a button', () => {
    const mockSetView = jest.fn();

    renderWithTheme(<Toogle setView={mockSetView} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should switch between viewing modes whenever the user clicks the button', () => {
    const setViewMock = jest.fn();
    const { getByRole } = renderWithTheme(<Toogle setView={setViewMock} />);
    const button = getByRole('button');

    fireEvent.click(button);
    expect(setViewMock).toHaveBeenCalledWith('table'); 

    fireEvent.click(button);
    expect(setViewMock).toHaveBeenCalledWith('card'); 

    fireEvent.click(button);
    expect(setViewMock).toHaveBeenCalledWith('table'); 
  });

});
