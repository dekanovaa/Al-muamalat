// import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import Contact from "./Sections/Contact/Contact"
import Header from "./Sections/Header/Header"
import Service from "./Sections/Service/Service"


function Homepage() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Service/>
        <Contact/>
        {/* <Footer/> */}
    </div>
  )
}

export default Homepage