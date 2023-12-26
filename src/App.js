// import logo from './logo.svg';
import React, { useState } from 'react';
import './App2.css';
import About from './components/About';
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import TextForm from './components/TextForm';



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [mod, setMod] = useState('light');
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === "light"){
      setmode('dark');
      document.body.style.backgroundColor = '#042750';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-DarkMode";
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-LightMode";
    }
  }

  const toggleMode1 = () =>{
    if(mod === "light"){
      setMod('dark');
      document.body.style.backgroundColor = 'red';
      document.querySelectorAll('button').forEach(button => {
        button.style.backgroundColor = 'green';
        button.style.color = 'white';
      })
      
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMod('light');
      document.body.style.backgroundColor = 'white';
      document.querySelectorAll('button').forEach(button => {
        button.style.backgroundColor = '#0d6efd';
        button.style.color = 'white';
      })
      
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
        
            <Navbar title="Textutils" aboutText="About us" mode={mode} mod={mod} toggleMode={toggleMode} toggleMode1={toggleMode1} />
            <Alert alert={alert}/>
        <TextForm  mode={mode} showAlert={showAlert} />
            {/* <Navbar /> */}

            <div className="container">
                {/* <Routes>
                    <Route path="/about" element={<About />} /> */}
                        
                    
        
                    {/* <Route path="/">
                        <TextForm heading="Enter a text to analyze below" mode={mode}  showAlert={showAlert}/>
                    </Route> */}
                {/* </Routes> */}
            </div>
            
        
        



    </>
  );
}

export default App;
