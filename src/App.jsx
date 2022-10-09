import axios from 'axios';
import { useState } from 'react';
import './style/App.css';
import WeatherWidget from './Components/WeatherWidget';

function App() {
  const api_key = '5dbfe70ca7194ddab81195717220110';
  const api_url = 'http://api.weatherapi.com/v1';
  const api_method = '/current.json'
  const api = `${api_url}${api_method}?key=${api_key}&q=`

  const [data, setData] = useState();
  const [bg, setBg] = useState(true);
  const [deafultWidget, setDeafultWidget] = useState(true)
  const [isloading, setIsLoading] = useState(false)

  const active = () => {
    setBg(!bg)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);


    axios.get(`${api}${e.target[0].value}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
    setDeafultWidget(false)
    setIsLoading(false)
    e.target[0].value = '';
  }

  return (
    <div className="body" style={{ backgroundColor: bg ? '' : '#212121', color: bg ? '#212121' : 'white' }}>
      <header className='header container flex'>
        <div className='logo'>
          <a className='logoName' href='/' style={{ color: bg ? '#212121' : 'white' }}><h1>Weather</h1></a>
          <img className='logoImg' src="./images/bigCloud_smallSun.png" alt='logo' />
        </div>
        <form className='form-control' onSubmit={handleSearch}>
            <input  type="value" required="" style={{color: bg ? '#212121' : 'white'}}/>
              <label style={{color: bg ? '#212121' : 'white'}}>
                <span style={{ transitionDelay: '0ms' }}>S</span>
                <span style={{ transitionDelay: '50ms' }}>e</span>
                <span style={{ transitionDelay: '100ms' }}>a</span>
                <span style={{ transitionDelay: '150ms' }}>r</span>
                <span style={{ transitionDelay: '200ms' }}>c</span>
                <span style={{ transitionDelay: '250ms' }}>h</span>
                <span style={{ transitionDelay: '300ms' }}></span>
                <span style={{ transitionDelay: '350ms' }}>C</span>
                <span style={{ transitionDelay: '400ms' }}>o</span>
                <span style={{ transitionDelay: '450ms' }}>u</span>
                <span style={{ transitionDelay: '500ms' }}>t</span>
                <span style={{ transitionDelay: '550ms' }}>r</span>
                <span style={{ transitionDelay: '600ms' }}>y</span>
                <span style={{ transitionDelay: '650ms' }}>/</span>
                <span style={{ transitionDelay: '700ms' }}>c</span>
                <span style={{ transitionDelay: '750ms' }}>i</span>
                <span style={{ transitionDelay: '800ms' }}>t</span>
                <span style={{ transitionDelay: '850ms' }}>y</span>
              </label>
        </form>
        <nav className='navbar'>
          <div onClick={active}>{(bg)
            ? <img className='modeImg' src="./images/day.png" alt='day-mode' />
            : <img className='modeImg' src="./images/night.png" alt='night-mode' />}
          </div>
        </nav>
      </header>
      <main className='main container'>
        <div>
          {deafultWidget ?
            <div className="widget" style={{ boxShadow: bg ? '-22px -22px 40px #63a9e6, 22px 22px 40px #79cfff' : "-31px -31px 62px #1b1b1b, 31px 31px 62px #272727" }}>
              <h1 className="widget-location"> { isloading ? <p>is loading ....</p> : <p>---- / ----</p> }</h1>
            <img className="widget-icon" src="./images/cloud.png" alt=""></img>
            <h1 className="widget-c">{ isloading ? <p>is loading ....</p> : <p>--<sup>&bull;</sup>C</p> }</h1>
            <p className="widget-text">{ isloading ? <p>is loading ....</p> : <p>--------</p> }</p>
            <p className="widget-time">{ isloading ? <p>is loading ....</p> : <p>---- -- -- --:--</p> }</p>
            </div>
             :
            (data && <WeatherWidget bg={bg} data={data} />)
            }
        </div>
      </main>


    </div>
  );
}

export default App;
