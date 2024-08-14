import './Footer.css'
import littleLemonFooterLogo from '../../assets/images/littleLemonFooterLogo.png';
import copyrightIcon from '../../assets/icons/copyrightIcon.png';
import envelopeIcon from '../../assets/icons/envelopeIcon.png';
import locationIcon from '../../assets/icons/locationIcon.png';
import phoneIcon from '../../assets/icons/phoneIcon.png';

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
                        <a className='facebook-icon' href="mailto:mohamed.adam.jemal@gmail.com" target="_blank" rel="noopener noreferrer">
                            <svg fill="white" viewBox="0 0 256 256" width="38px" height="38px">
                                <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
                                    <g transform="scale(5.12,5.12)">
                                        <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z" />
                                    </g>
                                </g>
                            </svg>
                        </a>

                        <a className='instagram-icon' href={"https://github.com/Mohamed-Adam-Jemal"} target="_blank" rel="noopener noreferrer">
                            <svg fill="white" viewBox="0 0 256 256" width="45px" height="45px">
                                <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
                                    <g transform="scale(10.66667,10.66667)">
                                        <path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                        
                        <a className='pinterest-icon' href={"https://linkedin.com/in/Mohamed-Adam-Jemal"} target="_blank" rel="noopener noreferrer">    
                            <svg viewBox="0 0 256 256" width="38px" height="38px">
                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
                                    <g transform="scale(5.12,5.12)">
                                        <path d="M25,2c-12.68213,0 -23,10.31787 -23,23c0,9.88416 6.26758,18.33026 15.03638,21.57697c-0.25256,-2.25159 -0.21295,-5.93903 0.2038,-7.72437c0.39026,-1.677 2.52124,-10.68713 2.52124,-10.68713c0,0 -0.64331,-1.28833 -0.64331,-3.1911c0,-2.99017 1.73242,-5.22119 3.88983,-5.22119c1.83496,0 2.71979,1.37762 2.71979,3.0282c0,1.8457 -1.17346,4.60266 -1.78125,7.15784c-0.5069,2.14093 1.07336,3.88654 3.18365,3.88654c3.82123,0 6.75848,-4.0296 6.75848,-9.84534c0,-5.14758 -3.698,-8.74719 -8.97955,-8.74719c-6.11676,0 -9.70728,4.58856 -9.70728,9.33099c0,1.84735 0.71118,3.82867 1.6001,4.90698c0.17529,0.21332 0.20093,0.39941 0.14886,0.61603c-0.1629,0.67889 -0.52509,2.13928 -0.59705,2.4386c-0.09344,0.39447 -0.31177,0.47632 -0.71863,0.28693c-2.68579,-1.25031 -4.3645,-5.17566 -4.3645,-8.32959c0,-6.78156 4.92682,-13.0108 14.20654,-13.0108c7.45886,0 13.25476,5.31384 13.25476,12.41791c0,7.41003 -4.67291,13.37299 -11.15686,13.37299c-2.17889,0 -4.22638,-1.13202 -4.92676,-2.46918c0,0 -1.07831,4.10486 -1.34045,5.11121c-0.45245,1.74042 -2.38928,5.34601 -3.36157,6.9837c2.22424,0.71851 4.59357,1.11102 7.05377,1.11102c12.68262,0 23,-10.31738 23,-23c0,-12.68213 -10.31738,-23 -23,-23z" />
                                    </g>
                                </g>
                            </svg>
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