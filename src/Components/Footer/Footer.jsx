import './Footer.css'
import sublogo from '../../assets/sublogo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
        <div className="container footer_container">
            <img className='footer_logo' src={sublogo} alt="diordesignlogo" />
            <nav className='footer_nav'>
                <Link className='footer_link' to="/">Home</Link>
                <Link className='footer_link' to="/">About</Link>
                <Link className='footer_link' to="/">Service</Link>
                <Link className='footer_link' to="/">Contact Us</Link>
            </nav>
            <div className="footer_wrap">
              <a  href="#"><i class="fa-brands fa-youtube"></i></a>
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <hr className='footer_hr'/>
            <p className='footer_text'>Copyright Satyam Studio</p>
        </div>



    </div>
  )
}

export default Footer