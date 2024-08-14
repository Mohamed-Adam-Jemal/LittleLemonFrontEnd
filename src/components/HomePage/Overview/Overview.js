import littleLemonMainPhoto from '../../../assets/images/littleLemonMainImage.jpg';
import Button from '../../Button/Button';

import './Overview.css'

const Overview = () => {
    return(
        <div className='overview-container'>
            <div className='overview-body'>
                <h1>Little Lemon</h1>
                <h2>Ghaza</h2>
                <p>
                    Little Lemon, founded by Adrian and Mario, is a cozy Mediterranean restaurant offering fresh, locally-sourced Mediterranean cuisine. Its commitment to sustainability, community, and convenient online table booking makes every visit special. 
                </p>
                <button>Reserve a Table</button>
            </div>
            <img src={littleLemonMainPhoto} alt="Little Lemon Main Photo" className='main-image'/>
        </div>
    )
}

export default Overview;