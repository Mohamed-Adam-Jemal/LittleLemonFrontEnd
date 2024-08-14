import'./TestimonialsCard.css'
import Rate from './Rate'

const TestimonialsCard = ({name, imgUrl, rate, review}) => {
    return(
        <div className='testimonials-card-container'>
            <h2>{name}</h2>
            <div className="img-rate">
                <img src={imgUrl}/>
                <Rate rate={rate}/>
            </div>
            <p>{review}</p>
        </div>
    )
}

export default TestimonialsCard;