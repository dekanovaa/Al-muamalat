import "swiper/css";
import './Media.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import slide1 from '../../../../assets/slide1.png'
import slide2 from '../../../../assets/slide2.png'
import slide3 from '../../../../assets/slide3.png'
import { Autoplay } from 'swiper/modules';

function Media() {
  return (
    <div className="media">
        <div className="container media_container">
            <h1 className="media_title">Our Media</h1>
            <p className="media_text">Our media showcase</p>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={false}
        modules={[Autoplay]}
        
        className="mySwiper"
      >
        <SwiperSlide style={{backgroundImage:`url(${slide1})`}}>
            <div className="media_wrap">
              <p className="media_subtext">  Why Islamic finance?</p>
              <i class="fa-solid fa-circle-play"></i>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage:`url(${slide2})`}}>
        <div className="media_wrap">
              <p className="media_subtext">What makes Islamic finance unique?</p>
              <i class="fa-solid fa-circle-play"></i>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage:`url(${slide3})`}}>
        <div className="media_wrap">
              <p className="media_subtext">  How is risk managed in Islamic finance?</p>
              <i class="fa-solid fa-circle-play"></i>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage:`url(${slide1})`}}>
        <div className="media_wrap">
              <p className="media_subtext">  Why Islamic finance?</p>
              <i class="fa-solid fa-circle-play"></i>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage:`url(${slide2})`}}>
        <div className="media_wrap">
              <p className="media_subtext"> What makes Islamic finance unique?</p>
              <i class="fa-solid fa-circle-play"></i>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage:`url(${slide3})`}}>
        <div className="media_wrap">
              <p className="media_subtext"> How is risk managed in Islamic finance?</p>
              <i class="fa-solid fa-circle-play"></i>
            </div>
        </SwiperSlide>
      </Swiper>
     

        </div>
    </div>
  )
}

export default Media