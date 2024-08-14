import './WeekSpecialsCard.css'
import deliveryIcon from '../../../assets/icons/deliveryIcon.jpg'
import Button from "../../Button/Button";

const  WeekSpecialsCard = ({imgUrl, price, title, desc}) => {
    

    return(
        <div className='card-container'>
            <img src={imgUrl} className='card-img'/>
            <div className='card-body-text'>
                <div className='title-price'>
                    <h3>{title}</h3>
                    <p className='price'>{price}</p>
                </div>
                <p className='card-description'>{desc}</p>
                <div className='order-delivery'>
                    <Button label={'Order Delivery'} width='160px' height='43px'/>
                    <img src={deliveryIcon} style={{width:'33px', height:'33px'}}/>
                </div>
            </div>
        </div>
    )
}

export default WeekSpecialsCard;