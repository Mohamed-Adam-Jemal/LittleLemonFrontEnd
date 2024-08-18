import './UserBookingDetails.css';
import React, { useState } from 'react';

    const UserBookingDetails = ({ formData, updateFormData }) => {
    const [touchedFields, setTouchedFields] = useState({});
    const [errors, setErrors] = useState({});

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouchedFields((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
        // Check for error after blur
        if (!formData[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'This field is required',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateFormData({ [name]: value });
        // Clear the error when the user starts typing
        if (value) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }
    };

    const handleCheckboxChange = (event) => {
        updateFormData({ isChecked: event.target.checked });
    };

    const getInputId = (name) => {
        return touchedFields[name] && errors[name] ? 'input-error' : '';
    };

    return (
        <>
            <div className="labels-grid">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="firstName-input"
                    id={getInputId('firstName')}
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="lastName-input"
                    id={getInputId('lastName')}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="email-input"
                    id={getInputId('email')}
                />
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number*"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="phoneNumber-input"
                    id={getInputId('phoneNumber')}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Secret Key*"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="password-input"
                    id={getInputId('password')}
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="address-input"
                    id={getInputId('address')}
                />
            </div>
            <div className='privacy-policy-checkbox'>
                <input 
                    type='checkbox'
                    name='isChecked'
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
