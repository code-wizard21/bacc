import logo from './logo.svg';
import './App.css';
import Allroutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Allroutes/>
      <Register/>
    </div>
  )
}

export default App;
