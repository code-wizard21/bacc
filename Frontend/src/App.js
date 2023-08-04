import "./App.css";
import Allroutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import React from "react";
import Footer from "./Components/Footer";
import axios from "axios";

function App() {
  const [vCount, setVCount]=React.useState(0)
  //--------------website hit count-----------------
  React.useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/count`,
    })
      .then((res) => {
        console.log(res.data.count)
        setVCount(res.data.count)
      })
      .catch((err) => {
        console.log(err);
      })
  },[]);

  return (
    <div className="App">
      <Navbar />
      <Allroutes />

      <Footer vCount={vCount}/>
    </div>
  );
}

export default App;
