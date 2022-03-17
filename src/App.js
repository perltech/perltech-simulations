import { useState } from 'react';

import './App.css';

import Banner from './components/banner.jsx';
import Poem from './components/poem.jsx';
import SecretQuote from './components/secretQuote';
import SecretInput from './components/secretInput';

import QRCode from 'qrcode.react'
import { Outlet } from 'react-router-dom';


function App() {
  const [phrase, setPhrase] = useState("");
  let secretPhrase = "your best source for truth";

  return (
      <div className="App">
        <header className="App-header">
          <Banner />
        </header>
        <main className='App-main'>
          <Poem className='poem' />
          <SecretQuote />
          <div className='secretInput'>
            <SecretInput  phrase={phrase} secretPhrase={secretPhrase} onChange={e => setPhrase(e.target.value.toLowerCase())} />
          </div>
          <Outlet />
        </main>
      </div>
  );
}

export default App;
