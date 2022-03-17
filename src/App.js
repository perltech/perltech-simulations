import { useState } from 'react';

import './App.css';

import Banner from './components/Banner.jsx';
import Poem from './components/Poem.jsx';
import SecretQuote from './components/SecretQuote';
import SecretInput from './components/SecretInput';

import QRCode from 'qrcode.react'
import { Outlet } from 'react-router-dom';


function App() {
  const [phrase, setPhrase] = useState("");
  let secretPhrase = "your best source for truth";

  return (
      <div className="App">
        {/* Reverses render order, where new components come in at the top */}
        <Outlet />
        <header className="App-header">
          <Banner />
        </header>
        <main className='App-main'>
          <Poem className='poem' />
          <SecretQuote />
          <div className='secretInput'>
            <SecretInput  phrase={phrase} secretPhrase={secretPhrase} onChange={e => setPhrase(e.target.value.toLowerCase())} />
          </div>
        </main>
      </div>
  );
}

export default App;
