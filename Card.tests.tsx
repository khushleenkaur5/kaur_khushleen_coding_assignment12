// Card.tests.tsx
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('renders the card with the title, content, and footer', () => {
    render(
      <Card 
        title="Test Card" 
        content="Test content" 
        footer="Test footer"
      />
    );
    expect(screen.getByText(/Test Card/i)).toBeInTheDocument();
    expect(screen.getByText(/Test content/i)).toBeInTheDocument();
    expect(screen.getByText(/Test footer/i)).toBeInTheDocument();
  });

  test('renders the image if provided', () => {
    render(
      <Card 
        title="Test Card" 
        content="Test content" 
        imageSrc="https://via.placeholder.com/150" 
        altText="Card Image"
      />
    );
    expect(screen.getByAltText(/Card Image/i)).toBeInTheDocument();
  });

  test('does not render an image if not provided', () => {
    render(
      <Card 
        title="Test Card" 
        content="Test content" 
      />
    );
    expect(screen.queryByAltText(/Card Image/i)).toBeNull();
  });
});
