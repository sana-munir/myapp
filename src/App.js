import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//darkmode is enabled or not
  const togglemode =() =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  /*setInterval(() => {
    document.title = "Install TextUtils Now";
  }, 2000);
  setInterval(() => {
    document.title = "TextUtils is amazing";
  }, 1500);*/
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type:type,
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  return (
    //<div className="blank">Lovely</div>
    <>
    <Router basename="/myapp">
    <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={togglemode} />
    <Alert alert={alert}/>
    <div className='container'>
    <Routes>{/*use exact path so right page is opened*/}
    <Route exact path="/" element={<Textform showAlert={showAlert} mode={mode} heading="Try TextUtils - word counter, character counter, remove extra spaces"/>} />
    <Route path="/About" element={<About mode={mode} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}export default App;