
import './App.css';
import Allroutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import React from 'react';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import EmailContactForm from './Components/Mail';


function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Allroutes/>
      
      {/* <EmailContactForm/> */}

      <Footer/>
     
      
    </div>
  )
}

export default App;
