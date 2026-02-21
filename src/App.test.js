import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter, Navigate } from 'react-router';
import { initializeTimes } from './App';
import { updateTimes } from './App';
import { fetchAPI } from './utils/api';



test('renders the reserve a table button', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const buttonElement = screen.getByRole('button', { name: /Reserve a Table/i });
  expect(buttonElement).toBeInTheDocument();
});

test('initializes available times correctly', () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test('updates available times with unknown action type', () => {
  const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: "", payload: '2024-06-15' }; // A Saturday
  const updatedTimes = updateTimes(initialTimes, action);
  expect(updatedTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updates available times with known action type', () => {
  const initialTimes = ['17:00', '17:30', '18:00', '19:00', '20:00', '20:30', '21:00', '22:00', '22:30'];
  const action = { type: "UPDATE_TIMES", payload: '2024-06-15' }; // A Saturday
  const updatedTimes = updateTimes(initialTimes, action);
  expect(updatedTimes).toEqual(fetchAPI(new Date('2024-06-15')));
});

