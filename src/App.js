import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Main from "./components/Main"
import React, { useState } from 'react';
import './App.css';


function App() {

  const [entry, setEntry] = useState("login")

  const navigate = (entry) => {
    setEntry(entry)
  }

  return (
    <div className="App">
     <Header navHandler = {navigate}/>
     <Main type = {entry} navHandler = {navigate}/>
    </div>
  );
}

export default App;
