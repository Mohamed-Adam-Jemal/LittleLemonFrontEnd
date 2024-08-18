import { availableTimesReducer } from './Reservations'; 
import { render, screen } from '@testing-library/react';
import BookingDetails from './Booking Details/BookingDetails'; 

describe('BookingDetails Component', () => {
    it('renders a textarea with "Special Requests" as the placeholder', () => {
        const availableTimes = []; 
        const dispatch = jest.fn(); 

        render(<BookingDetails availableTimes={availableTimes} dispatch={dispatch} />);
        const textareaElement = screen.getByPlaceholderText("Special Requests");
        expect(textareaElement).toBeInTheDocument();
    });
});

describe('availableTimesReducer', () => {
    it('should initialize with default available times', () => {
        const initialState = {
            availableTimes: ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
        };

        const action = { type: 'UNKNOWN_ACTION' };
        const newState = availableTimesReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });

    it('should update available times based on date', () => {
        const initialState = {
            availableTimes: []
        };

        // Testing for a weekday
        let action = { type: 'SET_DATE', payload: '2024-08-14' }; // Tuesday
        let newState = availableTimesReducer(initialState, action);
        expect(newState.availableTimes).toEqual(["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]);

        // Testing for a weekend
        action = { type: 'SET_DATE', payload: '2024-08-17' }; // Saturday
        newState = availableTimesReducer(initialState, action);
        expect(newState.availableTimes).toEqual(["15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]);
    });
});
