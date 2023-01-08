import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Lamborghini from '../Images/lambo-slide.jpeg';
import Ferrari from '../Images/ferrari-slide.jpeg';
import Mercedes from '../Images/mercedes-slide.jpeg';


function Home() {
 const images = [ 
    Lamborghini, Ferrari, Mercedes
  ];
  return (
    <div>
     <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span className="animation-effect">Huracan</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span className="animation-effect">458 Italia</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span className="animation-effect">AMG GT</span>
                </div>
            </div>
        </Slide>

  


    <section className="about">
      <h2 class="text">About Us</h2>
      <p>
      Supercars should be accessible to everyone, not just the super-rich. At R.A.S, (Rent A Supercar) everyone can access these cars without needing to spend hundreds of thousands of dollars at the dealer or worry about the maintenance.  Here, you can spend $1,000 (or more depending on the vehicle), and the car is yours for three days (or up to 1 hour depending on the vehicle). 
      </p>
    </section>
    </div>
  )
}

export default Home