import { render, screen } from '@testing-library/react';
import CreateAccount from './CreateAccount';
import '@testing-library/jest-dom';

describe('CreateAccount', () => {
  it('renders the heading and subtitle', () => {
    render(<CreateAccount />);
    expect(screen.getByRole('heading', { name: /create an account/i })).toBeInTheDocument();
    expect(screen.getByText(/enter your details below/i)).toBeInTheDocument();
  });

  it('renders all input fields', () => {
    render(<CreateAccount />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email or phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('renders Create Account and Google buttons', () => {
    render(<CreateAccount />);
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up with google/i })).toBeInTheDocument();
  });

  it('renders log in link for existing users', () => {
    render(<CreateAccount />);
    expect(screen.getByText(/already have account\?/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /log in/i })).toHaveAttribute('href', '/loginPage');
  });

  it('renders the mobile image', () => {
    render(<CreateAccount />);
    const img = screen.getByAltText(/mobile/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/images/mobile.png');
  });
});