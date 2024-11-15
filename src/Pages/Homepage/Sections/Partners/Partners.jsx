
import './Partner.css'
import skrill from '../../../../assets/Skrill.png'
import stripe from '../../../../assets/Stripe.png'
import western from '../../../../assets/western.png'
import american from '../../../../assets/american.png'
import clarna from '../../../../assets/clarna.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Partners() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }
 
  return (
    <div className='partner'>
        <h1 className="partner_title">Our Partners and Clients</h1>
       
         
         <Slider {...settings}>
        <div className="slider_wrap">
            <img src={skrill} alt="Skrill" />
           </div>
          <div className="slider_wrap">
            <img src={stripe} alt="Stripe" />
           </div>
           <div className="slider_wrap">
            <img src={western} alt="Western" />
           </div>
           <div className="slider_wrap">
            <img src={american} alt="American" />
           </div>
           <div className="slider_wrap">
            <img src={clarna} alt="Clarna" />
           </div>
          
       
         </Slider>
         </div>
   
      
      

    
  )
}

export default Partners