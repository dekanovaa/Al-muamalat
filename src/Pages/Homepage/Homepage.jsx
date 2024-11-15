// import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import Contact from "./Sections/Contact/Contact"
import Expert from "./Sections/Expert/Expert"
import Header from "./Sections/Header/Header"
import Media from "./Sections/Media/Media"
import Partners from "./Sections/Partners/Partners"
import Question from "./Sections/Question/Question"
import Service from "./Sections/Service/Service"
import Students from "./Sections/Students/Students"
import Footer from "../../Components/Footer/Footer"


function Homepage() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Service/>
        <Expert/>
        {/* <Partners/> */}
        <Media/>
        <Students/>
        <Question/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Homepage