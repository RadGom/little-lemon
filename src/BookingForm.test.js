import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const availableTimes = ['12:00', '13:00', '14:00'];
  const dispatch = jest.fn();

  beforeEach(() => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  });

  test('renders form fields correctly', () => {
    expect(screen.getByLabelText(/fecha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/hora/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cantidad de comensales/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ocasión/i)).toBeInTheDocument();
  });

  test('displays error when date is in the past', () => {
    fireEvent.change(screen.getByLabelText(/fecha/i), { target: { value: '2020-01-01' } });
    fireEvent.blur(screen.getByLabelText(/fecha/i));
    expect(screen.getByText(/la fecha no puede ser en el pasado/i)).toBeInTheDocument();
  });

  test('enables submit button when form is valid', () => {
    fireEvent.change(screen.getByLabelText(/fecha/i), { target: { value: '2024-12-31' } });
    fireEvent.change(screen.getByLabelText(/hora/i), { target: { value: '12:00' } });
    fireEvent.change(screen.getByLabelText(/cantidad de comensales/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/ocasión/i), { target: { value: 'cumpleaños' } });

    expect(screen.getByRole('button', { name: /confirmar reservación/i })).not.toBeDisabled();
  });

  test('dispatch is called when date is changed', () => {
    fireEvent.change(screen.getByLabelText(/fecha/i), { target: { value: '2024-12-31' } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: '2024-12-31' });
  });

});
