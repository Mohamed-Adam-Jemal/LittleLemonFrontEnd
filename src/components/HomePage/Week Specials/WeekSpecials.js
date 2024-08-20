import WeekSpecialsCard from "./WeekSpecialsCard";
import './WeekSpecials.css';
import BruchettaImg from '../../../assets/images/dishes/Bruchetta.jpg';
import GreekSaladImg from '../../../assets/images/dishes/GreekSalad.jpg';
import PastaImg from '../../../assets/images/dishes/Pasta.jpg';


const WeekSpecials = () => {
    const dishes = [
        {
            imgUrl: GreekSaladImg,
            title: "Greek Salad",
            price: "$12.99",
            desc: "A fresh Greek Salad with crisp lettuce, tomatoes, cucumbers, olives, and feta. Lightly dressed with olive oil and lemon juice. Perfect for a healthy meal."
        },
        {
            imgUrl: BruchettaImg,
            title: "Bruschetta",
            price: "$8.99",
            desc: "Grilled bread topped with tomatoes, garlic, and basil. Drizzled with olive oil. A simple yet flavorful Italian classic appetizer."
        },
        {
            imgUrl: PastaImg,
            title: "Pasta",
            price: "$15.99",
            desc: "Hearty pasta with rich tomato sauce, garlic, and herbs. Topped with Parmesan. A comforting and satisfying classic dish."
        }
    ];

    return (
        <div className="weekSpecials-container">
            <div className="card-header">
                <h1 className="weekSpecials-title">This Week's Specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className="cards">
                {dishes.map((dish, index) => (
                    <WeekSpecialsCard 
                        key={dish.title} 
                        imgUrl={dish.imgUrl} 
                        title={dish.title} 
                        price={dish.price} 
                        desc={dish.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default WeekSpecials;
