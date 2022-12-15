
import './App.css';
import Allroutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Topbar from './Components/Topbar';
import React from 'react';
import Footer from './Components/Footer';
import Calander from './Components/Calander';

function App() {
  const [width,setWidth]=React.useState('100%')
  return (
    <div className="App" style={{width:width}}>
      <Topbar setScreen={(wid)=>setWidth(wid)}/>
      <Navbar/>
      <Allroutes/>
      
       {/* <Calander/> */}


      <Footer/>
     
     
    </div>
  )
}

export default App;
