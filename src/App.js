import { useState } from 'react';
import './App.css';

function App() {

  const [bg, setbg] = useState(true);

  const active = () => {
    setbg(!bg)
  }

  return (
    <div className="body" style={{ backgroundColor: bg ? '' : '#212121', color: bg ? 'black' : 'white' }}>
      <header className='header container flex'>
        <div className='logo'>
          <a className='logoName' href='/' style={{ color: bg ? 'black' : 'white' }}><h1>Weather</h1></a>
          <img className='logoImg' src="./images/cloud.png" alt='logo' />
        </div>
        <nav className='navbar'>
          <div onClick={active}>{(bg)
            ? <img className='modeImg' src="./images/day.png" alt='day-mode' />
            : <img className='modeImg' src="./images/night.png" alt='night-mode' />}
          </div>
        </nav>
      </header>

      <main className=' main container'>
        <div>
          <h1>leon</h1>
        </div>
      </main>


    </div>
  );
}

export default App;
