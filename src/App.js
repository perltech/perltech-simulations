import logo from './PerlTech_Simulations_Logo_Red.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>パールテックシミュレーション</h1>
        <h2>Simulating the best in reality.</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main className='App-main'>
        <section className='poem'>
          <section>
            <p>Open my heart</p>
            <p>So that it may search for truth</p>
            <p>In the world</p>
            <p>Outside of this surgical gallery.</p>
          </section>
          <section>
            <p>The sterile steel you drag across my chest</p>
            <p>Bleeds out all that was left inside.</p>
            <p>My white blood cells</p>
            <p>And, whatever harm they couldn’t help but absorb.</p>
          </section>
          <section>
            <p>Take me apart</p>
            <p>With your own hands</p>
            <p>Show the spectators who I am to you.</p>
            <p>And, let me see it, for myself</p>
            <p>Before the ventilator expires.</p>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
