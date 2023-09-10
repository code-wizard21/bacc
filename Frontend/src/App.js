import "./App.css";
import Allroutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import React from "react";
import Footer from "./Components/Footer";
import axios from "axios";

function App() {
  //--------------website visitor count-----------------
  const [vCount, setVCount] = React.useState(0);
  let clientData = navigator.userAgentData;

  React.useEffect(() => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL}/visitor/count`,
      data: { os: clientData.platform, browser: clientData.brands[2].brand },
    })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => console.log(err));

    // setTimeout(()=>{
    //   axios({
    //     method: "get",
    //     url: `${process.env.REACT_APP_URL}/visitor/count`,
    //   })
    //     .then((res) => {
    //       setVCount(res.data.count)
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    // },500)
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Footer vCount={vCount} />
    </div>
  );
}

export default App;
