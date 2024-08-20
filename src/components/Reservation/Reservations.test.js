import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { initializeTimes } from './Reservations';
import { fetchAPI, submitAPI } from './formAPIs';
import Reservations from './Reservations';
import BookingDetails from './Booking Details/BookingDetails';
import SuccessfullBook from './Successful Book/SuccessfullBook';
import UserBookingDetails from './User Booking Details/UserBookingDetails';
import CreditCardDetails from './Credit Card Details/CreditCardsDetails';
import { MemoryRouter } from 'react-router-dom';  // Import MemoryRouter

jest.mock('./formAPIs', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(() => true),
}));

describe('initializeTimes', () => {
    it('should initialize with times returned from fetchAPI', () => {
        const initialState = {
            availableTimes: []
        };

        // Mock fetchAPI to return specific times
        fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);

        const action = { type: 'SET_DATE', payload: '2024-08-14' };
        const newState = initializeTimes(initialState, action);

        expect(newState.availableTimes).toEqual(["17:00", "18:00", "19:00"]);
        expect(fetchAPI).toHaveBeenCalledWith(new Date('2024-08-14'));
    });

    it('should update available times based on date', () => {
        const initialState = {
            availableTimes: []
        };

        // Mock fetchAPI to return different times for testing
        fetchAPI.mockReturnValueOnce(["17:30", "18:00", "19:00"])
                  .mockReturnValueOnce(["18:30", "20:00", "22:00"]);

        // Dispatch action for a specific date (Weekday)
        let action = { type: 'SET_DATE', payload: '2024-08-14' };
        let newState = initializeTimes(initialState, action);
        expect(newState.availableTimes).toEqual(["17:30", "18:00", "19:00"]);
        expect(fetchAPI).toHaveBeenCalledWith(new Date('2024-08-14'));

        // Dispatch action for a different date (Weekend)
        action = { type: 'SET_DATE', payload: '2024-08-17' };
        newState = initializeTimes(initialState, action);
        expect(newState.availableTimes).toEqual(["18:30", "20:00", "22:00"]);
        expect(fetchAPI).toHaveBeenCalledWith(new Date('2024-08-17'));
    });
});


describe('SuccessfullBook Component', () => {
    it('should display "Booked Successfully" text when form is successfully submitted', async () => {
        render(<SuccessfullBook />);
        expect(screen.getByText('Booked Successfully')).toBeInTheDocument();
    });
});
