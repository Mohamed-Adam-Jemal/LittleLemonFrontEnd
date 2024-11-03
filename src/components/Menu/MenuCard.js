import React from 'react';
import './MenuCard.css'; // Import the CSS for styling

const MenuCard = ({ imgUrl, title, price, descp }) => {
    return (
        <div className="menu-card-container">
            <img src={imgUrl} alt={title} />
            <div className="card-body-text">
                <div className='title-price'>
                    <h3>{title}</h3>
                    <span className="price">{price}</span>
                </div>
                <p className="card-description">{descp}</p>
            </div>
        </div>
    );
};

export default MenuCard;
