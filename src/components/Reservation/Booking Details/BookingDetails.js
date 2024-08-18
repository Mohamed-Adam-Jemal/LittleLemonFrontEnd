// BookingDetails.js
import React from 'react';
import './BookingDetails.css';
import { useState } from 'react';

const BookingDetails = ({ availableTimes, dispatch, formData, updateFormData }) => {
    const [touchedFields, setTouchedFields] = useState({});

    const [errors, setErrors] = useState({});

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
    
        if (name === 'diners') {
            if (value > 9) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    diners: 'Max is 9',
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    diners: '',
                }));
            }
        }
    };
    
    const getInputId = (name) => {
        if (name === 'diners') {
            return touchedFields[name] && (formData[name] === '' || errors.diners) ? 'input-error' : '';
        }
        return touchedFields[name] && !formData[name] ? 'input-error' : '';
    };
    

    return (
        <div className="booking-details-form" data-testid="booking-details-form">
            <div className="form-first-line">
                <input
                    type="date"
                    name="date"
                    placeholder="Date*"
                    value={formData.date}
                    onChange={handleDateChange}
                    onBlur={handleBlur}
                    id={getInputId('date')}
                    required
                    data-testid="date-input"
                />
                <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={getInputId('time')}
                    required
                    data-testid="time-select"
                >
                    <option value="" disabled>Select time*</option>
                    {availableTimes.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                    ))}
                </select>
                <div className='diners-container'>
                    <input
                        type="number"
                        name="diners"
                        placeholder="N° Diners*"
                        value={formData.diners}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id={getInputId('diners')}
                        required
                        max={9}
                        data-testid="diners-input"
                    />
                    {errors.diners && (
                        <div className="error-message" data-testid="diners-error">
                            {errors.diners}
                        </div>
                    )}
                </div>
            </div>
            <div className="form-second-line">
                <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={getInputId('occasion')}
                    required
                    data-testid="occasion-select"
                >
                    <option value="" disabled>Occasion *</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business</option>
                </select>
                <select
                    name="seatingPreference"
                    value={formData.seatingPreference}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={getInputId('seatingPreference')}
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
