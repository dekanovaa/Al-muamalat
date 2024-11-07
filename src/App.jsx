
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Contactpage from './Pages/Contactpage/Contact'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='contact' element={<Contactpage/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
