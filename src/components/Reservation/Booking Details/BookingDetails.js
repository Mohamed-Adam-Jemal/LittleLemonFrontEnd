import React from 'react';
import './BookingDetails.css';
import { useState } from 'react';

const BookingDetails = ({ availableTimes, dispatch, formData, updateFormData, errors, updateErrors }) => {
    const [touchedFields, setTouchedFields] = useState({});

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouchedFields((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    };

    const handleDateChange = (event) => {
        const { value } = event.target;
        updateFormData({ date: value });
        dispatch({ type: 'SET_DATE', payload: value });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateFormData({ [name]: value });

        // Clear error when user starts typing
        updateErrors(name, { msg: '', status: '' });

        if (name === 'diners') {
            if (value > 9) {
                updateErrors(name, { msg: 'Max is 9', status: true });
            } else if (value <= 0) {
                updateErrors(name, { msg: 'Min is 1', status: true });
            } else {
                updateErrors(name, { msg: '', status: false });
            } 
        }
    };

    const getInputClass = (name) => {
        if (name === 'diners') {
            return touchedFields[name] && (formData[name] === '' || errors[name].status ) ? 'input-error' : '';
        }
        return touchedFields[name] && (formData[name] === '') ? 'input-error' : '';
    };
    

    return (
        <div className="booking-details-form" data-testid="BookingDetails">
            <div className="form-first-line">
                <input
                    title='date'
                    type="date"
                    name="date"
                    aria-label="Select booking date"
                    placeholder="Date*"
                    value={formData.date}
                    onChange={handleDateChange}
                    onBlur={handleBlur}
                    className={getInputClass('date')}
                    required
                    data-testid="date-select"
                />
                <select
                    title='time'
                    name="time"
                    aria-label="Select booking time"
                    value={formData.time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('time')}
                    required
                    data-testid="time-select"
                >
                    <option value="" disabled>Select time*</option>
                    {availableTimes.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                    ))}
                </select>
                <div className='diners-container'>
                    <div className='field-error-container'>
                        <input
                            title='diners'
                            type="number"
                            name="diners"
                            aria-label="Enter number of diners"
                            placeholder="N° Diners*"
                            value={formData.diners}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={getInputClass('diners')}
                            required
                            max={9}
                            data-testid="diners-input"
                        />
                        {errors.diners?.msg && (
                            <div className="error-message" data-testid="diners-error">
                                {errors.diners.msg}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="form-second-line">
                <select
                    title='occasion'
                    name="occasion"
                    aria-label="Select occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('occasion')}
                    required
                    data-testid="occasion-select"
                >
                    <option value="" disabled>Occasion *</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business</option>
                </select>
                <select
                    title='seatingPreference'
                    name="seatingPreference"
                    aria-label="Select seating preference"
                    value={formData.seatingPreference}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('seatingPreference')}
                    required
                    data-testid="seating-preference-select"
                >
                    <option value="" disabled>Seating Preference *</option>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                </select>
            </div>
            <div className="form-third-line">
                <textarea
                    name="specialRequests"
                    aria-label="Enter special requests"
                    placeholder="Special Requests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="special-requests-textarea"
                />
            </div>
        </div>
    );
}

export default BookingDetails;
