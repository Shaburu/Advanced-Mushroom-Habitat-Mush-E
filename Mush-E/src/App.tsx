
import './App.css'
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.tsx";


import {Home, Mushroom, Green} from "./components/pages";


function App() {
  return (
    <>
     
   
      <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mushroom" element={<Mushroom />} />
        <Route path="/green" element={<Green />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/mushroom" element={<Home />} />
      </Routes>
       
      </div>

    </>
  )
}

export default App
