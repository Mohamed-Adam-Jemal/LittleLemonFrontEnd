import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reservations.css';
import BookingDetails from './Booking Details/BookingDetails';
import UserBookingDetails from './User Booking Details/UserBookingDetails';
import CreditCardDetails from './Credit Card Details/CreditCardsDetails';
import SuccessfullBook from './Successful Book/SuccessfullBook';
import { fetchAPI, submitAPI } from './formAPIs';


export function isValidEmail(email) {
    // Regular expression for validating an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isAlphabeticWithSpaces(str) {
    // Regular expression to match alphabetic characters and spaces only
    const alphabeticWithSpacesRegex = /^[A-Za-z\s]+$/;
    return alphabeticWithSpacesRegex.test(str);
}

export function isValidExpiryDate(expiryDate) {
    // Regular expression to match MM/YY format
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    
    // Test the format using the regex
    if (!regex.test(expiryDate)) {
        return false;
    }

    // Extract month and year from the input
    const [month, year] = expiryDate.split('/').map(Number);

    // Check if the month is valid (1-12)
    if (month < 1 || month > 12) {
        return false;
    }

    // Check if the year is in the future (simple check for 2-digit year)
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of the current year
    if (year < currentYear || year > currentYear + 10) {
        return false;
    }

    return true;
}

export function isValidateLength(value, length) {
    
    // Check if the value length is between 1 and 4 digits
    if (value.toString().length > length) {
        return false; // value is too long
    }  
    return true; // value is valid
}

// Define the initial state
const initialState = {
    availableTimes: []
};

// initializeTimes  function
export const initializeTimes  = (state, action) => {
    switch (action.type) {
        case 'SET_DATE':
            const times = fetchAPI(new Date(action.payload));
            return { ...state, availableTimes: times };
        default:
            return state;
    }
};

const Reservations = () => {

    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    // Use the reducer for managing available times
    const [state, dispatch] = useReducer(initializeTimes , initialState);

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

    const [errors, setErrors] = useState({
        bookingDetails: {
            diners: { msg: '', status: false },
        },
        userBookingDetails: {
            firstName: { msg: '', status: false },
            lastName: { msg: '', status: false },
            email: { msg: '', status: false },
        },
        creditCardDetails: {
            cardNumber: { msg: '', status: false },
            nameOnCard: { msg: '', status: false },
            expiryDate: { msg: '', status: false },
            cvv: { msg: '', status: false }
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

    const updateErrors = (formSection, fieldName, newValues) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [formSection]: {
                ...prevErrors[formSection],
                [fieldName]: {
                    ...prevErrors[formSection][fieldName],
                    ...newValues
                }
            }
        }));
    };

    console.log(errors.userBookingDetails);
    console.log(errors.creditCardDetails);

    // Validation functions
    const validateStep = () => {
        switch (step) {
            case 1:
                const { date, time, diners, occasion, seatingPreference } = formData.bookingDetails;
                return date && time && diners > 0 && diners <= 9 && occasion && seatingPreference;
    
            case 2:
                const { firstName, lastName, email } = errors.userBookingDetails;
                return (!firstName?.status && formData.userBookingDetails.firstName) &&
                       (!lastName?.status && formData.userBookingDetails.lastName) &&
                       (!email?.status && formData.userBookingDetails.email) &&
                       formData.userBookingDetails.isChecked;
    
            case 3:
                const { cardNumber, nameOnCard, expiryDate, cvv } = errors.creditCardDetails;
                return (!cardNumber?.status && formData.creditCardDetails.cardNumber) &&
                       (!nameOnCard?.status && formData.creditCardDetails.nameOnCard) &&
                       (!expiryDate?.status && formData.creditCardDetails.expiryDate) &&
                       (!cvv?.status && formData.creditCardDetails.cvv);
    
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
                //if ( step > 1) goToStep(1); // Only allow going to step 1 if the current step is greater than 1
                goToStep(1);
            }}
        ></span>
        <span
            data-testid="step-2"
            style={{ backgroundColor: step === 2 ? '#F4CE14' : '#ccc' }}
            onClick={() => {
                //if (step > 2) goToStep(2); // Only allow going to step 2 if the current step is greater than 2
                goToStep(2);
            }}
        ></span>
        <span
            data-testid="step-3"
            style={{ backgroundColor: step === 3 ? '#F4CE14' : '#ccc' }}
            onClick={() => {
                //if (step > 3) goToStep(3); // Only allow going to step 3 if the current step is greater than 3
                goToStep(3);
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
                        errors={errors.bookingDetails}
                        updateErrors={(fieldName, newValues) => updateErrors('bookingDetails', fieldName, newValues)}
                    />
                )}
                {step === 2 && (
                    <UserBookingDetails
                        formData={formData.userBookingDetails}
                        updateFormData={(newValues) => updateFormData('userBookingDetails', newValues)}
                        errors={errors.userBookingDetails}
                        updateErrors={(fieldName, newValues) => updateErrors('userBookingDetails', fieldName, newValues)}
                    />
                )}
                {step === 3 && (
                    <CreditCardDetails
                        formData={formData.creditCardDetails}
                        updateFormData={(newValues) => updateFormData('creditCardDetails', newValues)}
                        errors={errors.creditCardDetails}
                        updateErrors={(fieldName, newValues) => updateErrors('creditCardDetails', fieldName, newValues)}
                    />
                )}
                {step === 4 && submitAPI(formData) &&<SuccessfullBook />}

                {step <= 4 && (
                    <button 
                        title='continueButton'
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
