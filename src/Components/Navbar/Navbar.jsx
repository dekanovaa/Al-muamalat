import './Navbar.css'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <div className="container navbar_container">
           <Link to="/"> <img className='logo' src={logo} alt="logo" /></Link>
            <nav className='navbar_nav'>
                <Link className='navbar_link' to="/">Home</Link>
                <Link className='navbar_link' to="programs">
                <select className='navbar_select'>
                    <option value="">Programs</option>
                    <option value="">International educational programs</option>
                    <option value="">Specialized courses</option>
                    <option value="">Islamic Finance Literacy Course</option>
                    <option value="">Certification program</option>
                </select>
                </Link>
                <Link className='navbar_link' to="Finance">Finance Tools</Link>
                <Link className='navbar_link' to="contact">Contact</Link>
            </nav>
           <div className='navbar_wrap'>
           <select className='lang_select'>
                <option value="en">Eng</option>
                <option value="uz">Uzb</option>
                <option value="ru">Ru</option>
            </select>
            <hr className='navbar_hr' />
            <button className='navbar_btn'>
                Sign in
            </button>
           </div>


        </div>

    </div>
  )
}

export default Navbar