import logo from '../assets/images/PerlTech_Simulations_Logo_Red.png';

const Banner = () => {
    return (
        <div>
            <h1>パールテックシミュレーション</h1>
            <h2>Simulating the best in reality.</h2>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default Banner;