import { useState } from 'react';

import './App.css';

import Banner from './components/Banner.jsx';
import Poem from './components/Poem.jsx';
import SecretQuote from './components/SecretQuote';
import SecretInput from './components/SecretInput';

import QRCode from 'qrcode.react'
import { Link, Outlet } from 'react-router-dom';


import Chapter01Scene01 from './components/CYOA/Chapter01/Chapter01Scene01';
import PortfolioLink from './components/PortfolioLink';


function App() {
  const [phrase, setPhrase] = useState("");
  let secretPhrase = "your best source for truth";

  let [playerCount, setPlayerCount] = useState("");


  return (
      <div className="App">
        {/* Reverses render order, where new components come in at the top */}
        {playerCount ? <div className='scene'><Outlet /></div> : ""}
        
        <header className="App-header">
          <Banner />
          <PortfolioLink className='p-link' />
        </header>
        <main className='App-main'>
          <Poem className='poem' />
          <SecretQuote />
          <div className='secretInput'>
            <SecretInput  phrase={phrase} secretPhrase={secretPhrase} onChange={e => setPhrase(e.target.value.toLowerCase())} />
            <br />
            {phrase === secretPhrase ? <Chapter01Scene01 className='scene'/> : ""}
            {phrase === secretPhrase ? <button onClick={() => setPlayerCount(playerCount = "SinglePlayer")}>By Myself</button> : ""}
            {phrase === secretPhrase ? <button onClick={() => setPlayerCount(playerCount = "MultiPlayer")}>With Another</button> : ""}
            <br />      
            {playerCount ? <Link to="/chapter01scene02route"><button style={{ "font-family": "subHeader" }} onClick={() => window.scrollTo(0, 0)}>Scroll to the top</button></Link> : ""}
          </div>
        </main>
      </div>
  );
}

export default App;