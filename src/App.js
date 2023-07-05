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
  const bgclassremove = ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }
  const [mode, setMode] = useState('light');//darkmode is enabled or not
  const togglemode =(cls) =>{
    bgclassremove();
    document.body.classList.add('bg-'+cls)
  }
  const togglemode1 = () =>{
    if(mode ==='light'){
      setMode('dark');
      bgclassremove();
      document.body.classList.add('bg-dark');
      //document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      bgclassremove();
      document.body.classList.add('bg-light');
      //document.body.style.backgroundColor='white';
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
    <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={togglemode} togglemode1={togglemode1}/>
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