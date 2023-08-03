import "./App.css";
import Allroutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import React from "react";
import Footer from "./Components/Footer";
import axios from "axios";

function App() {
  //--------------website hit count-----------------
  React.useEffect(()=>{
    window.onload=console.log('hello')
    // axios({
    //   method:'post',
    //   url:`${process.env.REACT_APP_URL}`
    // })
  })
  
  return (
    <div className="App">
      <Navbar />
      <Allroutes />

      <Footer />
    </div>
  );
}

export default App;
