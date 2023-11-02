import React from 'react';
import SeparateButtonProvisioning from './SeparateButtonProvisioning.jsx';
import CombinedButtonProvisioning from './CombinedButtonProvisioning.jsx';
import { useState } from 'react';
import {
  Routes,
  Route,
  useSearchParams,
  BrowserRouter
} from "react-router-dom"


const Home = () => {

  const [isSeparateButtonProvisioning, setButtonMode] = useState(true);

  return (
    <div>
      <h1>Hotel Mares</h1>
      <h2>Web Provisioning Demo</h2>
      <div className="pure-button-group" role="group" aria-label="...">
        <button 
          className="pure-button" 
          onClick={() => setButtonMode(true)}
        > 
          Use Separate Buttons
        </button>
        <button 
          className="pure-button" 
          onClick={() => setButtonMode(false)}
        > 
          Using a combined button
        </button>
      </div>
      {isSeparateButtonProvisioning && <SeparateButtonProvisioning />}
      {!isSeparateButtonProvisioning && <CombinedButtonProvisioning />}
    </div>

  )
  }
  export default Home;