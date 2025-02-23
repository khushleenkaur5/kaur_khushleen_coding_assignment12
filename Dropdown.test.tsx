import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  const mockOnChange = jest.fn();

  test('renders Dropdown with options', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} onChange={mockOnChange} />);
    
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  test('calls onChange when an option is selected', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} onChange={mockOnChange} />);
    
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Option 2' } });
    expect(mockOnChange).toHaveBeenCalledWith('Option 2');
  });

  test('Dropdown is disabled when prop is set', () => {
    render(<Dropdown options={['Option 1']} onChange={mockOnChange} disabled />);
    
    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});
