import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';



function App() {
  const [Displaymode, setMode] = useState("light")

  const toggleMode = () => {
    if (Displaymode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='#22303C'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
      <Navbar mode={Displaymode} toggle={toggleMode} />
      <TextForm mode={Displaymode} TextHeading="Text Utils App" />

    </>
  );
}

export default App;
