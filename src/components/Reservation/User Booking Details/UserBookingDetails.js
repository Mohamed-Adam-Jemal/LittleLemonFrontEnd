import './UserBookingDetails.css';
import React, { useState } from 'react';
import { isAlphabeticWithSpaces, isValidEmail } from '../Reservations';

const UserBookingDetails = ({ formData, updateFormData, errors, updateErrors }) => {
    const [touchedFields, setTouchedFields] = useState({});

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouchedFields((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateFormData({ [name]: value });

        // Clear error when user starts typing
        updateErrors(name, { msg: '', status: '' });

        switch (name) {
            case 'email':
                if (!isValidEmail(value) && value) {
                    updateErrors(name, { msg: 'Set a valid email (example@example.com)', status: true });
                } else {
                    updateErrors(name, { msg: '', status: false });
                }
                break;
            case 'firstName':
                if (!isAlphabeticWithSpaces(value) && value) {
                    updateErrors(name, { msg: 'Only letters and spaces are allowed', status: true });
                }  else {
                    updateErrors(name, { msg: '', status: false });
                }
                break;
            case 'lastName':
                if (!isAlphabeticWithSpaces(value) && value) {
                    updateErrors(name, { msg: 'Only letters and spaces are allowed', status: true });
                } else {
                    updateErrors(name, { msg: '', status: false });
                }
                break;
            default:
                break;
        }
    };



    const handleCheckboxChange = (event) => {
        updateFormData({ isChecked: event.target.checked });
    };

    const getInputClass = (name) => {
        if (['firstName', 'lastName', 'email'].includes(name)) {
            return touchedFields[name] && (formData[name] === '' || errors[name].status) ? 'input-error' : '';
        }
        return touchedFields[name] && formData[name] === '' ? 'input-error' : '';
    };    

    return (
        <>
            <div className="labels-grid" data-testid="UserBookingDetails" >
                <div className='field-error-container'>
                    <input
                        title='firstName'
                        type="text"
                        name="firstName"
                        aria-label="Enter first name"
                        placeholder="First Name*"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-testid="firstName-input"
                        className={getInputClass('firstName')}
                        maxLength={20}
                    />
                    {errors.firstName?.msg && (
                        <div className="error-message" data-testid="firstName-error">
                            {errors.firstName.msg}
                        </div>
                    )}
                </div>
                <div className='field-error-container'>
                    <input
                        type="text"
                        name="lastName"
                        aria-label="Enter last name"
                        placeholder="Last Name*"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-testid="lastName-input"
                        className={getInputClass('lastName')}
                        maxLength={20}
                    />
                    {errors.lastName?.msg && (
                        <div className="error-message" data-testid="lastName-error">
                            {errors.lastName.msg}
                        </div>
                    )}
                </div>

                <div className='field-error-container'>
                    <input
                        type="email"
                        name="email"
                        aria-label="Enter email address"
                        placeholder="Email*"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-testid="email-input"
                        className={getInputClass('email')}
                    />
                    {errors.email?.msg && (
                        <div className="error-message" data-testid="email-error">
                            {errors.email.msg}
                        </div>
                    )}
                </div>
                <input
                    type="tel"
                    name="phoneNumber"
                    aria-label="Enter phone number"
                    placeholder="Phone Number*"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="phoneNumber-input"
                    className={getInputClass('phoneNumber')}
                    maxLength={20}
                />

                <input
                    type="password"
                    name="password"
                    aria-label="Enter password"
                    placeholder="Secret Key*"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="password-input"
                    className={getInputClass('password')}
                />

                <input
                    type="text"
                    name="address"
                    aria-label="Enter address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="address-input"
                    className={getInputClass('address')}
                />
            </div>
            <div className='privacy-policy-checkbox'>
                <input 
                    type='checkbox'
                    name='isChecked'
                    aria-label="Agree to privacy policy"
                    checked={formData.isChecked}
                    data-testid="privacy-policy-checkbox"
                    onChange={handleCheckboxChange}
                />
                <p>By checking this box, you agree to our restaurant's privacy policy.</p>
            </div>
        </>
    );
}

export default UserBookingDetails;
