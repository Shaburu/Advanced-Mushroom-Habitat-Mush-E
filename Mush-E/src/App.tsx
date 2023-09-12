
import './App.css'
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.tsx";


import viteLogo from '/mascaria.png'
import {Home} from "./components/pages";


function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={viteLogo} className="logo react" alt="React logo" />
        </a>
      </div>
   
      <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/mushroom" element={<Home />} />
      </Routes>
       
      </div>

    </>
  )
}

export default App
