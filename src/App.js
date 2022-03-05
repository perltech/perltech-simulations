import './App.css';

import Banner from './components/banner.jsx';
import Poem from './components/poem.jsx';
import SecretQuote from './components/secretQuote';

import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <header className="App-header">
          <Banner />
        </header>
        <main className='App-main'>
          <Poem />
          <SecretQuote />
        </main>
      </div>
    </ParallaxProvider>
  );
}

export default App;
