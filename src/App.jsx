import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter as Router } from "react-router-dom";


function App() {


 return(
  <Router>
    <Navbar/>
  </Router>

 )
}

export default App
