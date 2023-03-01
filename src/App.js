import './App.css';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const[markdown ,setmarkdown] = useState('');

  const handchange = (event) =>{
    setmarkdown(event.target.value);
  }
  return (
    <div className="App" style={{display:"flex"}}>
      <div className='app2' style={{display:"flex",flexDirection:"column",width:"50%",height:"100%"}}>
      <h1>Markdown Preview</h1>
     <textarea onChange={handchange}></textarea>
      </div>
    
 <div className='app3'>
 <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
 </div>
    
  )
}

export default App;