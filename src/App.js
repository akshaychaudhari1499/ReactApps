
import './App.css';
import C1 from "./comp1"
import C2 from "./comp2"
import React, { useState, useEffect } from 'react';
function App() {
  return (
    <div className="App">
    <C1 />
    <C2 /><C1 />
    <C2 /><C1 />
    <C2 /><C1 />
    <C2 />
    </div>
  );
}

export default App;
