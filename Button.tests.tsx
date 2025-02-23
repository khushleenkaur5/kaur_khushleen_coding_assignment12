import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  render(<Button text="Click Me" onClick={() => {}} />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('Button shows success message when clicked', () => {
  render(<Button text="Click Me" onClick={() => {}} />);

  // Simulate a click
  fireEvent.click(screen.getByText('Click Me'));

  // Check that the success message is shown
  expect(screen.getByText('Button clicked successfully!')).toBeInTheDocument();
});

test('Button changes color when disabled', () => {
  render(<Button text="Disabled" disabled={true} onClick={() => {}} />);
  expect(screen.getByText('Disabled')).toHaveStyle('background-color: grey');
});
