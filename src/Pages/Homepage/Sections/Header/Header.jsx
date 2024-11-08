
import './Header.css'
import person1 from '../../../../assets/person1.png'
import person2 from '../../../../assets/person2.png'
import person3 from '../../../../assets/person3.png'
import header from '../../../../assets/header.png'
import calendar from '../../../../assets/calendar 1.png'

function Header() {
  return (
    <div className='header'>
        <div className='container header_container'>
            <p className='header_text'>Seeking Knowledge is an Obligation in Islam</p>
            <h1 className='header_title'>Enhance Your Understanding of Islamic Ethics with Al-Muamalat</h1>
            <div className='header_wrapper'>
            <div className='header_wrap'>
                <p className='header_subtext'>STUDENTS' OPINION</p>
                <img className='header_img_f' src={person1} alt="pupil" />
                <img className='header_img_m' src={person2} alt="pupil2" />
                <img className='header_img_e' src={person3} alt="pupil3" />
             </div>
             <div className="star_div">
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-regular fa-star-half-stroke"></i>
             <p className='star_text'>( 10k+ Reviews)</p>
             </div>
            </div>
            <div className='header_right'>
                <div className='rectangle'>
                    <img className='header_pic' src={calendar} alt="calendar" />
                    <div>
                        <h4>250K</h4>
                        <p className='rectangle_text'>Assisted Student</p>
                    </div>
                </div>
                <img className='header_img' src={header} alt="header_person" />
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
                <div className="circle5"></div>
                <div className="circle6"></div>
                <div className="circle7"></div>
                <div className="circle8"></div>
                <div className="circle9"></div>
                <div className="circle10"></div>
                <div className="circle11"></div>
                <div className="circle12"></div>
            </div>
        </div>

    </div>
  )
}

export default Header