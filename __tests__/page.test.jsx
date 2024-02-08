import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a welcome message', () => {
    render(<Home />);
    expect(
      screen.getByText('Find in-depth information about Next.js features and API.'),
    ).toBeInTheDocument();
  });
});
