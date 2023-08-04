import "./App.css";
import Allroutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import React from "react";
import Footer from "./Components/Footer";
import axios from "axios";

function App() {
  //--------------website hit count-----------------
  React.useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/count`,
    })
      .then((res) => {
        console.log(res.data.count)
      })
      .catch((err) => {
        console.log(err);
      })
  });

  return (
    <div className="App">
      <Navbar />
      <Allroutes />

      <Footer />
    </div>
  );
}

export default App;
