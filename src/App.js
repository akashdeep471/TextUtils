
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  const[theme,setTheme] = useState("light")
  const[modeBtnText,setModeBtnText] = useState("Enable Dark Mode")
  const[alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({msg: message,
    type: type})
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleTheme = (cls)=>{
    // removebgClasses()
    // document.body.classList.add("bg-"+cls)
    if(theme==="dark"){
      setTheme("light")
      setModeBtnText("Enable Dark Mode")
      document.body.style.backgroundColor="white"
      showAlert("Light Mode Enabled","success")
    }
    else{
      setTheme("dark")
      setModeBtnText("Disable Dark Mode")
      document.body.style.backgroundColor="#0e1237"
      showAlert("Dark Mode Enabled","success")
    }
  }
  // const removebgClasses = () =>{
  //   document.body.classList.remove("bg-success")
  //   document.body.classList.remove("bg-primary")
  //   document.body.classList.remove("bg-warning")
  //   document.body.classList.remove("bg-danger")
  //   document.body.classList.remove("bg-dark")
  //   document.body.classList.remove("bg-light")
  // }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" theme={theme} toggleTheme={toggleTheme} modeBtnText={modeBtnText}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      <Route exact path="/" element={<TextForm heading="Enter your text here" theme={theme} showAlert={showAlert}/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
