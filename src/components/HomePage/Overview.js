import littleLemonMainPhoto from '../../assets/images/littleLemonMainImage.jpg';
import '../../styling/Overview.css'

const Overview = () => {
    return(
        <div className='overview-container'>
            <div className='overview-body'>
                <h1 style={{color:"#F4CE14",fontSize:"64px", fontFamily:"Markazi", fontWeight:"600"}}>Little Lemon</h1>
                <h2 style={{color:"white",fontSize:"40px", fontFamily:"Karla", fontWeight:"400"}}>Ghaza</h2>
                <p style={{width:"400px", height:"150px",fontSize:"20px", fontFamily:"Karla", fontWeight:"400", textAlign: "justify", color:"white"}}>
                    Little Lemon, founded by Adrian and Mario, is a cozy Mediterranean restaurant offering fresh, locally-sourced Mediterranean cuisine. Its commitment to sustainability, community, and convenient online table booking makes every visit special. 
                </p>
                <button>Reserve a Table</button>
            </div>
            <img src={littleLemonMainPhoto} alt="Little Lemon Main Photo" className='main-image'/>
        </div>
    )
}

export default Overview;