import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LogIn from './page';

describe('LogIn Component', () => {
  it('renders the login title', () => {
    render(<LogIn />);
    expect(screen.getByText("Log in Exclusive")).toBeInTheDocument();
  });

  it('renders the email and password fields', () => {
    render(<LogIn />);
    expect(screen.getByLabelText(/Email or Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('renders the Login button', () => {
    render(<LogIn />);
    expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
  });

  it('renders Create Account link', () => {
    render(<LogIn />);
    expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
  });

  it('renders Forgot Password text', () => {
    render(<LogIn />);
    expect(screen.getByText(/Forgot Password/i)).toBeInTheDocument();
  });
});