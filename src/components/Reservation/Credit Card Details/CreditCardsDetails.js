import './CreditCardDetails.css'
import creditCardCVVcon from '../../../assets/icons/creditCardCVVcon.png'
import { useState } from 'react';

const CreditCardDetails = ({ formData, updateFormData }) => {
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

    const getInputId = (name) => {
        return touchedFields[name] && errors[name] ? 'input-error' : '';
    };


    return(
        <div className="credit-card-details">
            <input 
                type="text" 
                placeholder="Name on Card*"
                required
                name='nameOnCard'
                value={formData.nameOnCard}
                onChange={handleChange}
                onBlur={handleBlur}
                id={getInputId('nameOnCard')}
            />
            <input 
                type="number"
                placeholder="Card Number*"
                name='cardNumber'
                required
                value={formData.cardNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                id={getInputId('cardNumber')}
            />
            
            <div className="expdate-cvv">
                <input 
                    type="date"
                    placeholder="Exp Date*"
                    name='expiryDate'
                    required
                    value={formData.expiryDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={getInputId('expiryDate')}
                />
                
                <div className='card-cvv'>
                    <input 
                        type="number" 
                        placeholder="CVV*"
                        required
                        name='cvv'
                        value={formData.cvv}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id={getInputId('cvv')}
                    />
                    <img src={creditCardCVVcon} width="52px" height="48px"/>
                </div>
            </div>
        </div>
    )
}

export default CreditCardDetails;