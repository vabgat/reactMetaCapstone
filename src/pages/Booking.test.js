import { render, screen, fireEvent } from '@testing-library/react';
import Booking from './Booking';
import { useReducer } from 'react';
import { TimesContext } from '../App';
import { BrowserRouter } from 'react-router';
import { fetchAPI, submitAPI } from '../utils/api';


const submitForm = jest.fn();

// Helper to provide TimesContext for tests
function TimesProvider({ children }) {
    const updateTimes = (state, action) => {
        if (action.type === "UPDATE_TIMES") {
            const date = new Date(action.payload);
            return fetchAPI(date);
        }
        else {
            return state;
        }
    };
    const initializeTimes = () => fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <TimesContext.Provider value={{ availableTimes, dispatch, submitForm }}>
            {children}
        </TimesContext.Provider>
    );
}

test('renders the booking form heading', () => {
    render(
        <TimesProvider>
            <BrowserRouter>
                < Booking />
            </BrowserRouter>
        </TimesProvider>
    );
    const headingElement = screen.getByText(/Reserve the Table/i);
    expect(headingElement).toBeInTheDocument();
});


test('submits the booking form with correct data', () => {
    render(
        <TimesProvider>
            <BrowserRouter>
                <Booking />
            </BrowserRouter>
        </TimesProvider>
    );

    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const dateInput = screen.getByLabelText(/Date/i);
    const contactInput = screen.getByLabelText(/Contact Number/i);
    const timeSelect = screen.getByLabelText(/Time/i);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const seatingSelect = screen.getAllByRole('radio');
    const submitButton = screen.getByRole('button', { name: /Confirm Reservation/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(contactInput, { target: { value: '1234567890' } });
    fireEvent.change(dateInput, { target: { value: '2024-06-15' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    fireEvent.click(seatingSelect[0]); // Select indoor seating

    fireEvent.click(submitButton);

    // Add assertions to check if the form submission was successful
    expect(submitForm).toHaveBeenCalled();
    expect(seatingSelect[0]).toBeChecked();
});