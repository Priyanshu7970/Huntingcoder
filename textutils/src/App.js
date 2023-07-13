import { useState } from 'react';
import './App.css'; 
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm'; 

  
function App() { 
 const  [mode,setMode] = useState('light');   
 const [alert,setAlert] = useState(null); 
 const showAlert = (message,type)=>{ 
    setAlert({
      msg:message, 
      type: type
    })
    setTimeout(()=>{
     setAlert(null)
    },1500)

 }
 const toggleMode = ()=>{
        if(mode === 'light'){
          setMode ('dark')  
          document.body.style.backgroundColor="#040265"; 
          showAlert("Dark mode has been enabled","success")
        }  
    
        else{
          setMode('light')  
          document.body.style.backgroundColor="white" 
          showAlert("Light mode has been enabled","success")

        }
 } 
 const greenMode = ()=>{
  if(mode === 'light'){
    setMode('green') 
    document.body.style.backgroundColor='green'; 
    showAlert("Green mode has been enabled","success") 
    document.title = "Textutils - Green mode"; 
    
  }  
  else if(mode === 'dark'){
    setMode('green') 
    document.body.style.backgroundColor='green'; 
    showAlert("Green mode has been enabled","success")
    document.title = "Textutils - Green mode";

  } 
  else{
    setMode('light') 
    document.body.style.backgroundColor='white'; 
    showAlert("Light mode has been enabled","success")
    document.title = "Textutils - Light mode";

  }
 }
  return (  
    <>
{/* <Navbar title="Textutils" aboutText="About Textutils" />  */} 
{/* We can set the default props using propTypes see in Navbar.js */}  
 {/* <Navbar/> */}   
 
<Navbar title="Textutils" mode={mode} greenMode={greenMode} toggleMode={toggleMode}/> 
<Alert alert={alert}/>
<div className="container my-3">
{/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> */}
<About/>
</div>
    </>
  ); 
}

export default App;
