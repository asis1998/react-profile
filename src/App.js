
import './App.css';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import Info from './components/Info';
import Skills from './components/Skills';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import { Routes,Route } from 'react-router-dom';



function App() {
  return (
    <>
    <input type="checkbox" id="darkMode"/>
  
    <div className="wrapper">
    <label htmlFor="darkMode" className="dark-mode-toggle">
    <i class="fa-solid fa-circle-half-stroke"></i>
    </label>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="skills" element={<Skills/>}/>
      <Route path="works" element={<Works/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>

    </Routes>
    {/* <Hero/>
    <Info/>
    <Skills/>
    <Works/>
    <About/>
    <Contact/> */}
  
    
   
    </div>
    </>
  );
}

export default App;
