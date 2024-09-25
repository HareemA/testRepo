import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home';
import About from './Components/About';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
