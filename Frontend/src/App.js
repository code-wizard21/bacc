import "./App.css";
import Allroutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import React from "react";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />

      <Footer />
    </div>
  );
}

export default App;
