import './Students.css'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import student from '../../../../assets/student.png'
import { Autoplay } from 'swiper/modules';

function Students() {
  return (
    <div className='student'>
        <div className='container student_container'>
            <h1 className="student_title">What students say</h1>
            <p className="student_text">Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>
            <Swiper
            id='student_swiper'
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
       <SwiperSlide id='student_slide' >
        <p className='student_subtext'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
          <div className="student_wrap">
           <img id='student_img' src={student} alt="Student" />
           <div className="slide_wrap">
            <h5>Finlay Kirk</h5>
            <p className='slide_text'>Web designer</p>
           </div>
          </div>
          </SwiperSlide>
        <SwiperSlide id='student_slide' >
        <p className='student_subtext'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
        <div className="student_wrap">
           <img id='student_img' src={student} alt="Student" />
           <div className="slide_wrap">
            <h5>Finlay Kirk</h5>
            <p className='slide_text'>Web designer</p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id='student_slide'>
        <p className='student_subtext'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
        <div className="student_wrap">
           <img id='student_img' src={student} alt="Student" />
           <div className="slide_wrap">
            <h5>Finlay Kirk</h5>
            <p className='slide_text'>Web designer</p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id='student_slide'>
        <p className='student_subtext'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
        <div className="student_wrap">
           <img id='student_img' src={student} alt="Student" />
           <div className="slide_wrap">
            <h5>Finlay Kirk</h5>
            <p className='slide_text'>Web designer</p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id='student_slide' >
        <p className='student_subtext'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
        <div className="student_wrap">
           <img id='student_img' src={student} alt="Student" />
           <div className="slide_wrap">
            <h5>Finlay Kirk</h5>
            <p className='slide_text'>Web designer</p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id='student_slide'>
        <p className='student_subtext'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
        <div className="student_wrap">
           <img id='student_img' src={student} alt="Student" />
           <div className="slide_wrap">
            <h5>Finlay Kirk</h5>
            <p className='slide_text'>Web designer</p>
           </div>
          </div>
          </SwiperSlide>
      </Swiper>
        </div>

    </div>
  )
}

export default Students