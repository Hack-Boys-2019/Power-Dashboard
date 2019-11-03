import React from 'react';
import './App.css';
import Main from './Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import UtilityToggle from './UtilityToggle.js'


function App() {
  return (<div>
    <UtilityToggle />
    {Main()}
  </div>);
}

export default App;
