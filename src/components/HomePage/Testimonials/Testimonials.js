import './Testimonials.css';
import TestimonialsCard from './TestimonialsCard';
import person1Img from '../../../assets/images/persons/person1.jpg';
import person2Img from '../../../assets/images/persons/person2.jpg';
import person3Img from '../../../assets/images/persons/person3.jpg';
import person4Img from '../../../assets/images/persons/person4.jpg';
import person5Img from '../../../assets/images/persons/person5.jpg';
import whiteArrow100 from '../../../assets/icons/whiteArrow100.png';

import { useRef } from 'react';

const Testimonials = () => {
    const testimonials = [
        { id: 1, name: "Ahmad Ali", imgUrl: person1Img, rate: "5", review: "The pasta here is absolutely delicious! The flavors are rich and the sauce is perfect. Highly recommend!" },
        { id: 2, name: "David Jones", imgUrl: person2Img, rate: "4", review: "The sushi rolls are fresh and beautifully presented. Each bite is a burst of flavor. A must-try for sushi lovers." },
        { id: 3, name: "Ali Hassan", imgUrl: person3Img, rate: "5", review: "The lemon dessert was refreshing and full of flavor. A perfect balance of tart and sweet." },
        { id: 4, name: "James Miller", imgUrl: person4Img, rate: "4", review: "The burger I had was one of the best I've ever tasted. Juicy, flavorful, and the bun was fresh and soft." },
        { id: 5, name: "Omar Sami", imgUrl: person5Img, rate: "5", review: "The pizza is fantastic! The crust is crispy, the toppings are generous, and the cheese is perfectly melted." },
        { id: 1, name: "Ahmad Ali", imgUrl: person1Img, rate: "5", review: "The pasta here is absolutely delicious! The flavors are rich and the sauce is perfect. Highly recommend!" },
        { id: 2, name: "David Jones", imgUrl: person2Img, rate: "4", review: "The sushi rolls are fresh and beautifully presented. Each bite is a burst of flavor. A must-try for sushi lovers." },
        { id: 3, name: "Ali Hassan", imgUrl: person3Img, rate: "5", review: "The lemon dessert was refreshing and full of flavor. A perfect balance of tart and sweet." },
        { id: 4, name: "James Miller", imgUrl: person4Img, rate: "4", review: "The burger I had was one of the best I've ever tasted. Juicy, flavorful, and the bun was fresh and soft." },
        { id: 5, name: "Omar Sami", imgUrl: person5Img, rate: "5", review: "The pizza is fantastic! The crust is crispy, the toppings are generous, and the cheese is perfectly melted." },
    ];

    const scrollContainerRef = useRef(null);

    const getScrollDistance = () => {
        if (window.innerWidth <= 320) {
            return 220; 
        } else if (window.innerWidth <= 600) {
            return 255;
        } else {
            return 331;
        }
    };
    

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -getScrollDistance() : getScrollDistance(),
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="testimonials-container">
            <h1>Testimonials</h1>
            <div className='buttons-cards'>
                <img src={whiteArrow100} id='left-button' onClick={() => scroll('left')} alt="Scroll left" />
                <div className="testimonials-cards" ref={scrollContainerRef}>
                    {testimonials.map((testim) => (
                        <TestimonialsCard
                            key={testim.id}
                            name={testim.name}
                            imgUrl={testim.imgUrl}
                            rate={testim.rate}
                            review={testim.review}
                        />
                    ))}
                </div>
                <img src={whiteArrow100} id='right-button' onClick={() => scroll('right')} alt="Scroll right" />
            </div>
        </div>
    );
}

export default Testimonials;
