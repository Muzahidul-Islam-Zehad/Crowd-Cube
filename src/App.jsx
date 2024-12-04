
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-340px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
