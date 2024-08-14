import '../styling/Footer.css'
import littleLemonFooterLogo from '../assets/images/littleLemonFooterLogo.png';
import copyrightIcon from '../assets/icons/copyrightIcon.png';
import envelopeIcon from '../assets/icons/envelopeIcon.png';
import locationIcon from '../assets/icons/locationIcon.png';
import phoneIcon from '../assets/icons/phoneIcon.png';
import facebookIcon from '../assets/icons/facebookIcon.png';
import pinterestIcon from '../assets/icons/pinterestIcon.png';
import instagramIcon from '../assets/icons/instagramIcon.png';


const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer-content'>
                <img src={littleLemonFooterLogo} alt="Little Lemon footer Logo" style={{width:"130px", height:"230px"}}/>
                <ul className='contact-us'>
                    <h3 style={{color:"white", fontSize:"20px", fontFamily:"Karla", fontWeight:"700"}}>CONTACT US</h3>
                    <li>
                        <img src={locationIcon} alt="Location Icon" style={{width:"28px", height:"28px"}}/> 
                        <h4>Rafah, Ghaza Strip, Palestine</h4>
                    </li>
                    <li>
                        <img src={envelopeIcon} alt="Email Icon" style={{width:"28px", height:"28px"}}/> 
                        <h4>little.lemon"example.com</h4>
                    </li>
                    <li>
                        <img src={phoneIcon} alt="Phone Icon" style={{width:"28px", height:"28px"}}/> 
                        <h4>+1525548648492</h4>
                    </li>
                </ul>
                <ul className='connect-with-us'>
                    <h3 style={{margin:"0", color:"white", fontSize:"20px", fontFamily:"Karla", fontWeight:"700", marginBottom:"17px"}}>CONNECT WITH US</h3>
                    <div className='social-media-icons'>
                    <a href={"mailto:mohamed.adam.jemal@gmail.com"} target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook Icon" style={{width:"37px", height:"37px"}}/>
                    </a>
                    <a href={"https://github.com/Mohamed-Adam-Jemal"} target="_blank" rel="noopener noreferrer"></a>
                        <img src={instagramIcon} alt="Instagram Icon" style={{width:"35px", height:"35px"}}/>
                    <a/>
                    <a href={"https://linkedin.com/in/Mohamed-Adam-Jemal"} target="_blank" rel="noopener noreferrer">    
                        <img src={pinterestIcon} alt="Pinterest Icon" style={{width:"35px", height:"35px"}}/>
                    </a>
                    </div>
                </ul>
            </div>
            <div className='copyright'>
                <img src={copyrightIcon} alt="Copyright Icon" style={{width:"30px", height:"30px"}}/>
                <h4 style={{marginRight:"0.2vw", color:"white", fontSize:"13px", fontFamily:"Karla", fontWeight:"400"}}>2024 by Little Lemon. All Rights Reserved.</h4>
            </div>
        </div>
    )
}

export default Footer;