import React,{useState} from 'react' 


export default function TextForm(props) {
    const [text, setText] = useState(' ');  
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked "+ text)  
        let newText = text.toUpperCase(); 
        setText(newText) 
        props.showAlert("The letter are converted in Uppercase","success")
    } 
    const handleLowClick = ()=>{
        let newText = text.toLowerCase(); 
        setText(newText)
    }
    // const handleOnChange = ()=>{
    //     console.log("On Change")
    // }  
    // if you want to enter some text in textarea in outside then you have to onChange attribute  
    const handleOnChange = (event)=>{
        setText(event.target.value);   // the will give the event by default this will help you write in you text box  
    } 
    // text = "new text"// wrong way to change the state  
    // setText("new text"); // this is the correct way 
    // text is the variable we can take the exampe user enter some text and setText if page load or by default it will show the setText we cannot change or update the text variable like other coding language
    // text = "sfksjdifdsj" // This is not allowed  
    // for this we have to do like this   
    const ScentenceCount = ()=>{
      let display =   document.getElementsByClassName("display")[0];
       display.className = "visible" ; 
       props.showAlert("Scentence are counted","success")

    }  
    const handleCopy = ()=>{
         let text = document.getElementById("myBox") 
            text.select(); 
            navigator.clipboard.writeText(text.value) 
            props.showAlert("Text copied","success")
    }
    const handleExtraSpaces = ()=>{
       let newText = text.split(/[ ]+/) 
       setText(newText.join(" ")) 
       props.showAlert("Extra space has been removed","success")

    }  
       
  return ( 
    <>
    <div className="container " style={{color: (props.mode==='dark'?'white':'green'?'black':'#040265')}}>  
        {/* this is how we can use it  */}
        <h1 >{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'green'?'blue':'white',color: props.mode==='dark'?'white':'green'?'#97ff97':'#040265',cursor:'default'}} id="myBox" rows="8"></textarea>
        </div> 
    <button className="btn btn-primary mx-2" style={{backgroundColor: (props.mode ==='light'?'blue':'green'?'pink':'gray')}} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" style={{backgroundColor: (props.mode ==='light'?'blue':'green'?'pink':'gray')}} onClick={handleLowClick}>Convert to Lowercase</button>  
        <button className="btn btn-primary mx-2" style={{backgroundColor: (props.mode ==='light'?'blue':'green'?'pink':'gray')}} onClick={ScentenceCount}>Count Scentence</button>  
        <button className="btn btn-primary mx-2" style={{backgroundColor: (props.mode ==='light'?'blue':'green'?'pink':'gray')}} onClick={handleExtraSpaces}>Remove Space</button>  
        <button className="btn btn-primary mx-2" style={{backgroundColor: (props.mode ==='light'?'blue':'green'?'pink':'grey')}} onClick={handleCopy}>Copy</button>  

    </div>  
    <div className="container my-3 " style={{color: props.mode==='dark'?'white':'green'?'black':'#040265'}}>
        <h2>You text summary</h2> 
        <p id="para">{text.split(" ").length-1} word and {text.length} characters</p> 
        <p>{0.008 * (text.split(" ").length)} Minutes read</p>    
        {/* This function is made by me */}
        <p className="display invisible">{text.split(".").length} scentence are present</p>
       
        <h2>Preview</h2> 
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
