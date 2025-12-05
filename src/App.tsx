import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Components/User';

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
     <User name = "Shahriar Khan" age = {25} lang={["Bangla","English","Hindi"]} />

    </div>
  );
}

export default App;
