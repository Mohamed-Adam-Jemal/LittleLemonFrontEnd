import './CreditCardDetails.css';
import creditCardCVVcon from '../../../assets/icons/creditCardCVVcon.png';
import { useState } from 'react';
import { isAlphabeticWithSpaces, isValidExpiryDate, isValidateLength } from '../Reservations';

const CreditCardDetails = ({ formData, updateFormData, errors, updateErrors }) => {
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
            case 'nameOnCard':
                if (!isAlphabeticWithSpaces(value) && value) {
                    updateErrors(name, { msg: 'Only letters and spaces are allowed', status: true });
                } else {
                    updateErrors(name, { msg: '', status: false });
                }
                break;
            case 'cardNumber':
                if (!isValidateLength(value, 19) && value) {
                    updateErrors(name, { msg: 'Max card number length is 19', status: true });
                } else {
                    updateErrors(name, { msg: '', status: false });
                }
            break;
            case 'expiryDate':
                if (!isValidExpiryDate(value) && value) {
                    updateErrors(name, { msg: 'mm/yy (ex: 08/27)', status: true });
                }  else {
                    updateErrors(name, { msg: '', status: false });
                }
                break;
            case 'cvv':
                if (!isValidateLength(value, 4) && value) {
                    updateErrors(name, { msg: 'Max length is 4', status: true });
                } else {
                    updateErrors(name, { msg: '', status: false });
                }
                break;
            
            default:
                break;
        }
    };


    const getInputClass = (name) => {
        return touchedFields[name] && (formData[name] === '' || errors[name].status ) ? 'input-error' : '';
    };


    return (
        <div className="credit-card-details" data-testid="CreditCardDetails">
            <div className='field-error-container'>
                <input 
                    type="text" 
                    placeholder="Name on Card*"
                    aria-label="Enter name on card"
                    required
                    name="nameOnCard"
                    value={formData.nameOnCard}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('nameOnCard')}
                    maxLength={30}
                />
                {errors.nameOnCard?.msg && (
                    <div className="error-message" data-testid="nameOnCard-error">
                        {errors.nameOnCard.msg}
                    </div>
                )}
            </div>
            <div className="credit-card-details">
                <div className='field-error-container'>
                    <input 
                        type="number"
                        placeholder="Card Number*"
                        aria-label="Enter card number"
                        name="cardNumber"
                        required
                        value={formData.cardNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClass('cardNumber')}
                    />
                    {errors.cardNumber?.msg && (
                        <div className="error-message" data-testid="cardNumber-error">
                            {errors.cardNumber.msg}
                        </div>
                    )}
                </div>
            </div>
            
            <div className="expdate-cvv">
                <div className='field-error-container' >
                    <input 
                        type="text"
                        placeholder="Expiry Date*"
                        aria-label="Enter expiration date"
                        name="expiryDate"
                        required
                        value={formData.expiryDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClass('expiryDate')}
                    />
                    {errors.expiryDate?.msg && (
                        <div className="error-message" data-testid="expiryDate-error">
                            {errors.expiryDate.msg}
                        </div>
                    )}
                </div>
                <div className="card-cvv">
                    <div className='field-error-container'>
                        <input 
                            type="number" 
                            placeholder="CVV*"
                            aria-label="Enter CVV code"
                            required
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={getInputClass('cvv')}
                        />
                      {errors.cvv?.msg && (
                        <div className="error-message" data-testid="cvv-error">
                            {errors.cvv.msg}
                        </div>
                        )}
                    </div>
                    <img 
                        src={creditCardCVVcon} 
                        width="52px" 
                        height="48px"
                        alt="CVV information icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default CreditCardDetails;
