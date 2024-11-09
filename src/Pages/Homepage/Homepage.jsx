// import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import Contact from "./Sections/Contact/Contact"
import Expert from "./Sections/Expert/Expert"
import Header from "./Sections/Header/Header"
import Partners from "./Sections/Partners/Partners"
import Service from "./Sections/Service/Service"


function Homepage() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Service/>
        <Expert/>
        <Partners/>
        <Contact/>
        {/* <Footer/> */}
    </div>
  )
}

export default Homepage