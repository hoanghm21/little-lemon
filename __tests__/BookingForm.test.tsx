import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from '../src/components/BookingForm';

describe('BookingForm Component', () => {
  const mockProps = {
    formData: {
      name: '',
      mobile: '',
      email: '',
      date: '',
      time: '',
      guests: 1,
      occasion: '',
      table: '',
    },
    updateFormData: jest.fn(),
    goToNextStep: jest.fn(),
    goToPreviousStep: jest.fn(),
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    onDateChange: jest.fn(),
  };

  it('renders the title "Book your table"', () => {
    render(<BookingForm {...mockProps} />);
    const titleElement = screen.getByText(/Book your table/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('shows error messages for invalid fields when Next is clicked', () => {
    render(<BookingForm {...mockProps} />);
    const nextButton = screen.getByText(/next/i);

    // Simulate clicking the Next button
    fireEvent.click(nextButton);

    // Assert that error messages are displayed
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/mobile number is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
  });

  it('does not show error messages for valid fields', () => {
    const validProps = {
      ...mockProps,
      formData: {
        name: 'John Doe',
        mobile: '1234567890',
        email: 'john.doe@example.com',
        date: '2025-05-12',
        time: '17:00',
        guests: 2,
        occasion: 'Birthday',
        table: '',
      },
    };

    render(<BookingForm {...validProps} />);
    const nextButton = screen.getByText(/next/i);

    // Simulate clicking the Next button
    fireEvent.click(nextButton);

    // Assert that no error messages are displayed
    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/mobile number is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/date is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/time is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/occasion is required/i)).not.toBeInTheDocument();
  });
});