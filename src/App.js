import './App.css';

import Banner from './components/banner.jsx';
import Poem from './components/poem.jsx';
import SecretQuote from './components/secretQuote';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Banner />
        </header>
        <main className='App-main'>
          <Poem />
          <SecretQuote />
        </main>
      </div>
  );
}

export default App;
