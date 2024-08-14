import starIcon from '../../../assets/icons/starIcon.png'
import './Rate.css'

const Rate = ({rate}) => {

    return (
        <div className='rate-container'>
            <img src={starIcon}/>
            <p>{rate}/5</p>
        </div>
    ) 
}

export default Rate;