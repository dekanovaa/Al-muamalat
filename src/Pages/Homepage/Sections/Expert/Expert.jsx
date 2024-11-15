import './Expert.css'
import expert from '../../../../assets/expert.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Expert() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  return (
    <div className='expert'>
        <div className='container expert_container'>
            <h1 className="expert_title">Our Expert Team </h1>
            <p className="expert_text">Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>
            <Slider {...settings}>
      <div>
        <div className="expert_wrap">
<img className='expert_img' src={expert} alt="our expert" />
<div className="expert_wrapper">
    <h2 className="expert_subtitle">Dr. Mezbah Uddin Ahmed</h2>
    <p className="expert_subtext">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
    <div className="expert_line">
    <i id='expert_icon' class="fa-brands fa-telegram"></i>
    <i id='expert_icon' class="fa-brands fa-instagram"></i>
    <i id='expert_icon' class="fa-brands fa-facebook-f"></i>
    <i id='expert_icon' class="fa-brands fa-twitter"></i>
    </div>
</div>
</div>
      </div>

      
      <div>
      <div className="expert_wrap">
<img className='expert_img' src={expert} alt="our expert" />
<div className="expert_wrapper">
    <h2 className="expert_subtitle">Dr. Mezbah Uddin Ahmed</h2>
    <p className="expert_subtext">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
    <div className="expert_line">
    <i id='expert_icon' class="fa-brands fa-telegram"></i>
    <i id='expert_icon' class="fa-brands fa-instagram"></i>
    <i id='expert_icon' class="fa-brands fa-facebook-f"></i>
    <i id='expert_icon' class="fa-brands fa-twitter"></i>
    </div>
</div>
</div>
      </div>
      <div>
      <div className="expert_wrap">
<img className='expert_img' src={expert} alt="our expert" />
<div className="expert_wrapper">
    <h2 className="expert_subtitle">Dr. Mezbah Uddin Ahmed</h2>
    <p className="expert_subtext">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
    <div className="expert_line">
    <i id='expert_icon' class="fa-brands fa-telegram"></i>
    <i id='expert_icon' class="fa-brands fa-instagram"></i>
    <i id='expert_icon' class="fa-brands fa-facebook-f"></i>
    <i id='expert_icon' class="fa-brands fa-twitter"></i>
    </div>
</div>
</div>
      </div>

      <div>
      <div className="expert_wrap">
<img className='expert_img' src={expert} alt="our expert" />
<div className="expert_wrapper">
    <h2 className="expert_subtitle">Dr. Mezbah Uddin Ahmed</h2>
    <p className="expert_subtext">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
    <div className="expert_line">
    <i id='expert_icon' class="fa-brands fa-telegram"></i>
    <i id='expert_icon' class="fa-brands fa-instagram"></i>
    <i id='expert_icon' class="fa-brands fa-facebook-f"></i>
    <i id='expert_icon' class="fa-brands fa-twitter"></i>
    </div>
</div>
</div>
      </div>

    </Slider>

        </div>

    </div>
  )
}

export default Expert
