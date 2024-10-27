import React, { useEffect, useState } from 'react';
import MenuCard from "./MenuCard"; // Import the MenuCard component
import './MenuItems.css';

const MenuItems = () => {
    const [menuItems, setMenuItems] = useState([]); // State to hold menu items
    const [loading, setLoading] = useState(true); // State for loading status

    useEffect(() => {
        // Fetch menu items from the API
        const fetchMenuItems = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/menu-items'); // Replace with your API URL
                const data = await response.json();
                setMenuItems(data); // Assuming data is an array of menu items
            } catch (error) {
                console.error('Error fetching menu items:', error);
            } finally {
                setLoading(false); // Update loading status
            }
        };

        fetchMenuItems(); // Call the fetch function
    }, []); // Empty dependency array to run once on mount

    if (loading) {
        return <h2>Loading...</h2>; // Display loading message while fetching data
    }

    return (
        <div className="menuItems-container">
            <div className="cards">
                {menuItems.map((item) => (
                    <MenuCard 
                        key={item.title} 
                        imgUrl={item.imgUrl} // Assuming imgUrl is a property in your API response
                        title={item.title} 
                        price={item.price} 
                        desc={item.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuItems;
