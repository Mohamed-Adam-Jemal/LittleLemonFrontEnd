import React from 'react';
import './MenuCard.css'; // Import the CSS for styling

const MenuCard = ({ imgUrl, title, price, desc }) => {
    return (
        <div className="card-container">
            <img src={imgUrl} alt={title} />
            <div className="card-body-text">
                <h3>{title}</h3>
                <div className="title-price">
                    <span className="price">{price}</span>
                </div>
                <p className="card-description">{desc}</p>
            </div>
        </div>
    );
};

export default MenuCard;
