import '../../styling/About.css'
import MarioAndAdrianA from '../../assets/images/Mario and Adrian A.jpg';
import MarioAndAdrianB from '../../assets/images/Mario and Adrian b.jpg';


const About = () => {
    return(
        <div className='about-container'>
            <div className='about-body'>
                <h1>Little Lemon Founders</h1>
                <h2>Adrian and Mario</h2>
                <p>
                    Adrian and Mario founded Little Lemon Restaurant after bonding over their shared passion for fresh, Mediterranean cuisine and sustainability. Their idea blossomed into a successful venture, gaining fame for its unique blend of local ingredients and community spirit, which quickly made Little Lemon a local favorite. 
                </p>
                <button>Contact US</button>
            </div>
            <div className='founders-images'>
                <img src={MarioAndAdrianB} alt="Mario and Andrian Photo" className='founders-imageB'/>
                <img src={MarioAndAdrianA} alt="Mario and Adrian Photo" className='founders-imageA'/>
            </div>
        </div>
    )
}

export default About;