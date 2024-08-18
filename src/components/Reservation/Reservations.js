import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reservations.css';
import BookingDetails from './Booking Details/BookingDetails';
import UserBookingDetails from './User Booking Details/UserBookingDetails';
import CreditCardDetails from './Credit Card Details/CreditCardsDetails';
import SuccessfullBook from './Successful Book/SuccessfullBook';

// Define the reducer function
export const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATE':
            const date = new Date(action.payload);
            const day = date.getDay();
            const times = (day === 0 || day === 6) // 0: Sunday, 6: Saturday
                ? ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
                : ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
            return { ...state, availableTimes: times };
        default:
            return state;
    }
};

// Define the initial state
const initialState = {
    availableTimes: ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
};

const Reservations = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    // Use the reducer for managing available times
    const [state, dispatch] = useReducer(availableTimesReducer, initialState);

    // State to manage all form values
    const [formData, setFormData] = useState({
        bookingDetails: {
            date: '',
            time: '',
            diners: '',
            occasion: '',
            seatingPreference: '',
            specialRequests: ''
        },
        userBookingDetails: {
            firstName: '',
            lastName:'',
            email: '',
            phoneNumber: '',
            password: '',
            address: '',
            isChecked: false,
        },
        creditCardDetails: {
            cardNumber: '',
            nameOnCard: '',
            expiryDate: '',
            cvv: ''
        }
    });

    // State to manage button enabled/disabled state
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    // Handler to update form data
    const updateFormData = (formSection, newValues) => {
        setFormData((prevData) => ({
            ...prevData,
            [formSection]: {
                ...prevData[formSection],
                ...newValues
            }
        }));
    };


    // Validation functions
    const validateStep = () => {
        switch (step) {
            case 1:
                const { date, time, diners, occasion, seatingPreference } = formData.bookingDetails;
                return date && time && diners && diners <= 9 && occasion && seatingPreference;
            case 2:
                const { firstName, lastName, email, phoneNumber, password, address, isChecked } = formData.userBookingDetails;
                return firstName && lastName && email && phoneNumber && password && address && isChecked;
            case 3:
                const { cardNumber, nameOnCard, expiryDate, cvv } = formData.creditCardDetails;
                return cardNumber && nameOnCard && expiryDate && cvv;
            default:
                return true;
            }
    };


    // Update button state based on validation
    useEffect(() => {
        setIsButtonEnabled(validateStep());
    }, [formData, step]);

    const nextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        } else if (step === 4) {
            navigate('/');
        }
    };

    const goToStep = (stepNumber) => {
        setStep(stepNumber);
    };

    const currentButtonLabel = () => {
        if (step < 3) {
            return "Continue";
        } else if (step === 3) {
            return "Confirm";
        } else {
            return "Back to Home";
        }
    };

    return (
        <div className="main-container">
            <div className='back-box'>
                {step < 4 && <h1 data-testid="header">Find a table for any occasion</h1>}
                {step < 4 && (
    <div className="progress-lines" data-testid="progress-lines">
        <span
            data-testid="step-1"
            style={{ backgroundColor: step === 1 ? '#F4CE14' : '#ccc' }}
            onClick={() => {
                if ( step > 1) goToStep(1); // Only allow going to step 1 if the current step is greater than 1
            }}
        ></span>
        <span
            data-testid="step-2"
            style={{ backgroundColor: step === 2 ? '#F4CE14' : '#ccc' }}
            onClick={() => {
                if (step > 2) goToStep(2); // Only allow going to step 2 if the current step is greater than 2
            }}
        ></span>
        <span
            data-testid="step-3"
            style={{ backgroundColor: step === 3 ? '#F4CE14' : '#ccc' }}
            onClick={() => {
                if (step > 3) goToStep(3); // Only allow going to step 3 if the current step is greater than 3
            }}
        ></span>
    </div>
)}

                
                {step === 1 && (
                    <BookingDetails
                        availableTimes={state.availableTimes}
                        dispatch={dispatch}
                        formData={formData.bookingDetails}
                        updateFormData={(newValues) => updateFormData('bookingDetails', newValues)}
                    />
                )}
                {step === 2 && (
                    <UserBookingDetails
                        formData={formData.userBookingDetails}
                        updateFormData={(newValues) => updateFormData('userBookingDetails', newValues)}
                    />
                )}
                {step === 3 && (
                    <CreditCardDetails
                        formData={formData.creditCardDetails}
                        updateFormData={(newValues) => updateFormData('creditCardDetails', newValues)}
                    />
                )}
                {step === 4 && <SuccessfullBook />}

                {step <= 4 && (
                    <button 
                        onClick={nextStep} 
                        data-testid="continue-button"
                        style={{ backgroundColor: isButtonEnabled ? '#F4CE14' : '#ccc', cursor: isButtonEnabled ? 'pointer' : 'not-allowed' }}
                        disabled={!isButtonEnabled}
                    >
                        {currentButtonLabel()}
                    </button>
                )}
            </div>
        </div>
    );
}

export default Reservations;
